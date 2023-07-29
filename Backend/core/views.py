from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import WaterQuality
from .serializers import WaterQualitySerializer
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
# Create your views here.
class WaterQualityViews(viewsets.ModelViewSet):
    serializer_class= WaterQualitySerializer
    
    def get_queryset(self):
        data= WaterQuality.objects.all()
        return data
    
    def create(self, request, *args, **kwargs):
        model= joblib.load('./models/xgb.pkl')
        ph=request.data['ph']
        hardness= request.data['hardness']
        solids=request.data['solids']
        chloramines=request.data['chloramines']
        sulfate=request.data['sulfate']
        conductivity=request.data['conductivity']
        organic_carbon=request.data['organic_carbon']
        trihalomethanes=request.data['trihalomethanes']
        turbidity=request.data['turbidity']

        unscaled_input_data= np.array([[ph,hardness,solids,chloramines,sulfate,conductivity,organic_carbon,trihalomethanes,turbidity]]).astype(float)
        #loading scaler to scale data
        scalar = joblib.load('./models/scaler.pkl')
        #transforming the data
        input_data= scalar.transform(unscaled_input_data)
        #predicting in scaled data
        pred=model.predict(input_data)[0]

      
        #testing pred=0 before creating model.pickel file
        if pred==1:
            predicted_class= 'Potable'
        else:
            predicted_class= 'Not Potable'
        
        prediction= WaterQuality.objects.create(
            ph=ph,
            hardness=hardness,
            solids=solids,
            chloramines=chloramines,
            sulfate=sulfate,
            conductivity=conductivity,
            organic_carbon=organic_carbon,
            trihalomethanes=trihalomethanes,
            turbidity=turbidity,
            predicted_class=predicted_class
        )
        serializer = self.get_serializer(prediction)
        return Response(serializer.data)

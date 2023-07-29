from django.urls import path, include
from rest_framework import routers
# from .views import LeafDiseaseDetection, PredictionList
from .views import WaterQualityViews

router = routers.DefaultRouter()
# router.register('predict', LeafDiseaseDetection, basename='predict')
router.register('predict',WaterQualityViews, basename='predict')

urlpatterns = [
    path('', include(router.urls)),
    # path('predictions/', PredictionList.as_view(), name='prediction-list'),
]
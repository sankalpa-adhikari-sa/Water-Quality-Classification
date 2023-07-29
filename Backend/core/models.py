from django.db import models

class WaterQuality(models.Model):
        ph=models.FloatField(blank=True, null=True)
        hardness=models.FloatField(blank=True, null=True)
        solids=models.FloatField(blank=True, null=True)
        chloramines=models.FloatField(blank=True, null=True)
        sulfate=models.FloatField(blank=True, null=True)
        conductivity=models.FloatField(blank=True, null=True)
        organic_carbon=models.FloatField(blank=True, null=True)
        trihalomethanes=models.FloatField(blank=True, null=True)
        turbidity=models.FloatField(blank=True, null=True)
        predicted_class= models.CharField(max_length=50,blank=True,null=True)
        predicted_probs= models.CharField(max_length=50,blank=True,null=True)
        created_at= models.DateTimeField(auto_now_add=True,null=True,blank=True)

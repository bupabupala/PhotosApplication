from django.db import models

# Create your models here.
class photos(models.Model):
     name = models.CharField(max_length=20)
     category = models.CharField(max_length = 50)
     date_time = models.DateTimeField(auto_now_add = True)
     content = models.TextField(blank = True)

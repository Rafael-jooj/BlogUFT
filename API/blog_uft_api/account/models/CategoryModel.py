from django.db import models

class CategoryModel(models.Model):
    nome = models.CharField(max_length=20)
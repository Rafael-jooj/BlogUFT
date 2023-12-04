from django.db import models
from account.models.UserModel import CustomUser
from .CategoryModel import CategoryModel
import datetime
class Blog(models.Model):
    titulo = models.CharField(max_length=300, null=False)
    texto = models.TextField(null=False)
    capa = models.ImageField(upload_to='images/')
    data_publicacao = models.DateField(auto_now_add=True)
    data_alteracao = models.DateField(auto_now=True)
    categoria = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
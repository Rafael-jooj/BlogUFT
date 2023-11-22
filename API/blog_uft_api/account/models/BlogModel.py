from django.db import models
from UserModel import CustomUser
class Blog(models.Model):
    titulo = models.CharField(max_length=300, null=False)
    texto = models.TextField(null=False)
    capa = models.ImageField(upload_to='images/')
    publicacao = models.DateField()
    alteracao = models.DateField()
    categoria = models.ForeignKey()
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
from django.db import models
from .BlogModel import Blog
from account.models.UserModel import CustomUser

class CommentModel(models.Model):
    texto = models.TextField()
    post = models.ForeignKey(Blog, on_delete=models.CASCADE)
    usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
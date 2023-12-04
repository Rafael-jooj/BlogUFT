from django.db import models
from BlogModel import Blog

class CommentModel(models.Model):
    texto = models.TextField()
    post = models.ForeignKey(Blog, on_delete=models.CASCADE)

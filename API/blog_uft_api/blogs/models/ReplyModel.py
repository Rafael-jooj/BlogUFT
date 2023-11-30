from django.db import models
from CommentModel import CommentModel

class ReplyModel(models.Model):
    text = models.TextField()
    comentario = models.ForeignKey(CommentModel, on_delete=models.CASCADE)
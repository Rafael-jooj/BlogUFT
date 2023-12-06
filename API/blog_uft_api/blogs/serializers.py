from rest_framework import serializers
# from ..account.models.UserModel import CustomUser
from account.models.UserModel import CustomUser
from .models import Blog, CategoryModel,CommentModel

class BlogCreateSerializer(serializers.ModelSerializer):
    capa = serializers.ImageField()
    class Meta:
        model = Blog
        fields = ('titulo', 'texto','categoria','usuario','capa')

class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentModel
        fields = ('texto', 'post','usuario')

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'titulo', 'texto','categoria','usuario','capa','data_publicacao','data_alteracao')
        
class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username',)
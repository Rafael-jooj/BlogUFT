from rest_framework import serializers
from .models import Blog, CategoryModel

class BlogCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('titulo', 'texto','categoria','usuario')

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('titulo', 'texto','categoria','usuario','data_publicacao','data_alteracao')
        
class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = '__all__'

from rest_framework import serializers
from .models import CustomUser
from django.db.models import fields
from .models import Blog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('titulo', 'texto', 'name', 'capa','categoria')

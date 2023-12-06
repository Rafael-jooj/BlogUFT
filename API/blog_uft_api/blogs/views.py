from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogCreateSerializer, BlogSerializer, CategoryModelSerializer, CommentCreateSerializer, UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Blog, CategoryModel, CommentModel
# from ..account.models.UserModel import CustomUser
from account.models.UserModel import CustomUser


import json
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_blog(request):
    dados = request.data.copy()
    dados.update({'usuario': request.user.id})
    print(dados)
    blog = BlogCreateSerializer(data=dados)
    # print(blog)
    if blog.is_valid(raise_exception=True):
        blog.save()
        return Response(blog.data, status=status.HTTP_201_CREATED)
    else:
        return Response(blog.errors,status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_blog(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)
    print(blog.capa)
    serializer = BlogSerializer(blog)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_nome(request, c_id):
    try:
        id = CustomUser.objects.get(id=c_id)
    except Blog.DoesNotExist:
        return Response({"error": "Usuar not found"}, status=status.HTTP_404_NOT_FOUND)
    print(id.username)
    serializer = UserSerializer(id)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_blog(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)
    if blog.usuario.id != request.user.id:
        return Response({"error": "Blog Is not Yours"}, status=status.HTTP_403_FORBIDDEN)
    else:
        dados = request.data.copy()
        dados.update({'usuario': request.user.id})
        serializer = BlogCreateSerializer(blog, data=dados)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_blog(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)
    if blog.usuario.id != request.user.id:
        return Response({"error": "Blog Is not Yours"}, status=status.HTTP_403_FORBIDDEN)
    else:
        blog.delete()
        return Response({"message": "Blog deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_all_categories(request):
    categories = CategoryModel.objects.all()
    serializer = CategoryModelSerializer(categories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

    
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_all_blogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_blogs_created(request):
    blogs = Blog.objects.filter(usuario=request.user.id)
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request,c_id):
    dados = request.data.copy()
    dados.update({'usuario': request.user.id,'post':c_id})
    print(dados)
    comment = CommentCreateSerializer(data=dados)
    # print(blog)
    if comment.is_valid(raise_exception=True):
        comment.save()
        return Response(comment.data, status=status.HTTP_201_CREATED)
    else:
        return Response(comment.errors,status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_all_comment(request,c_id):
    comment = CommentModel.objects.filter(post=c_id)
    comentarios = []
    for comentario in comment:
        dados_comentarios = {
            'nome': comentario.usuario.username,
            'texto': comentario.texto 
        }
        comentarios.append(dados_comentarios)
    print(comentarios)
    teste = JsonResponse(comentarios,safe=False)
    print(teste)
    return teste
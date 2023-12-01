from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogCreateSerializer, BlogSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Blog

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_blog(request):
    dados = request.data.copy()
    dados.update({'usuario': request.user.id})
    blog = BlogCreateSerializer(data=dados)
    
    if blog.is_valid():
        blog.save()
        return Response(blog.data, status=status.HTTP_201_CREATED)
    else:
        return Response(blog.errors,status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_blog(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = BlogSerializer(blog)
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
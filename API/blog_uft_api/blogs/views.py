from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogCreateSerializer, BlogSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Blog

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_blog(request):
    print("AAAAAAAAAAAAAAAAAAA",request.data)
    dados = request.data.copy()
    dados.update({'usuario': request.user.id})
    print("userid",dados)
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
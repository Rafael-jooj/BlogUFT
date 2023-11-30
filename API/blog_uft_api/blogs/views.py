from rest_framework import status
from rest_framework.response import Response
from .serializers import BlogSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_blog(request):
    print("AAAAAAAAAAAAAAAAAAA",request.data)
    dados = request.data.copy()
    dados.update({'usuario': request.user.id})
    print("userid",dados)
    blog = BlogSerializer(data=dados)
    
    if blog.is_valid():
        blog.save()
        return Response(blog.data, status=status.HTTP_201_CREATED)
    else:
        return Response(blog.errors,status=status.HTTP_404_NOT_FOUND)
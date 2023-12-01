from django.urls import path
from .views import add_blog, get_blog

urlpatterns = [
    path('add_blog/', add_blog, name='add_blog'),
    path('get_blog/<int:blog_id>', get_blog, name='blog_detail'),
]
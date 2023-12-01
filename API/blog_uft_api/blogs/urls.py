from django.urls import path
from .views import add_blog, get_blog, update_blog, delete_blog, get_all_categories

urlpatterns = [
    path('add_blog/', add_blog, name='add_blog'),
    path('get_blog/<int:blog_id>', get_blog, name='blog_detail'),
    path('update_blog/<int:blog_id>', update_blog, name='update_blog'),
    path('delete_blog/<int:blog_id>', delete_blog, name='delete_blog'),
    path('categories', get_all_categories, name='get_all_categories'),
]
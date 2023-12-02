from django.urls import path
from .views import add_blog, get_blog, update_blog, delete_blog, get_all_categories, get_all_blogs, get_all_blogs_created,add_comment, get_all_comment

urlpatterns = [
    path('add_blog/', add_blog, name='add_blog'),
    path('get_blog/<int:blog_id>', get_blog, name='blog_detail'),
    path('update_blog/<int:blog_id>', update_blog, name='update_blog'),
    path('delete_blog/<int:blog_id>', delete_blog, name='delete_blog'),
    path('categories', get_all_categories, name='get_all_categories'),
    path('blogs', get_all_blogs, name='get_all_blogs'),
    path('blogs_created', get_all_blogs_created, name='get_all_blogs_created'),
    path('add_comment/<int:c_id>/', add_comment, name='add_comment'),
    path('get_all_comment/<int:c_id>', get_all_comment, name='get_all_comment'),
]
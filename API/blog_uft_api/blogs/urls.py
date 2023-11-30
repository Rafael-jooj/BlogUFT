from django.urls import path
from .views import add_blog

urlpatterns = [
path('add_blog/', add_blog, name='add_blog'),
]
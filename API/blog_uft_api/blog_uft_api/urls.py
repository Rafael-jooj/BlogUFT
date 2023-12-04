from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('account.urls')),  # Include the app's URLs
    path('api/', include('blogs.urls')),
]
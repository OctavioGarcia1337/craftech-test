from django.urls import path, include
from rest_framework import routers
from api_sql import views

router = routers.DefaultRouter()
router.register(r'audio', views.AudioView, 'audio')

urlpatterns = [
    path("api/v1/", include(router.urls))
]
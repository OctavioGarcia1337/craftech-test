from rest_framework import viewsets
from .serializer import AudioSerializer
from .models import Audio

# Create your views here.
class AudioView(viewsets.ModelViewSet):
    serializer_class = AudioSerializer
    queryset = Audio.objects.all()

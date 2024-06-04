from django.db import models

# Create your models here.
class Audio(models.Model):
    id_audio = models.AutoField(primary_key=True)
    youtube_id = models.CharField(max_length=255)

    def __str__(self):
        res = str(self.id_audio) + " : https://www.youtube.com/watch?v=" + self.youtube_id
        return res
import os

from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.db import models
from django.utils import timezone

EVENT_IMAGES_ROOT = os.path.join(settings.MEDIA_ROOT, 'images', 'events')

fs = FileSystemStorage(location=EVENT_IMAGES_ROOT)


class Event(models.Model):

    name = models.CharField(max_length=100)
    is_finished = models.BooleanField('Is event finished?', default=False)
    description = models.TextField('description')
    start_date = models.DateTimeField('start date')
    end_date = models.DateTimeField('end date')
    icon = models.ImageField('Image/Poster', storage=fs)

    def is_upcoming_event(self):
        now = timezone.now()
        return now <= self.start_date | (not self.is_finished)

    def is_running_now(self):
        now = timezone.now()
        return self.start_date <= now <= self.end_date

    def __str__(self):
        return self.name

import os

from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.db import models
from django.utils import timezone

EVENT_IMAGES_ROOT = os.path.join(settings.MEDIA_ROOT, 'images', 'events')

fs = FileSystemStorage(location=EVENT_IMAGES_ROOT)


class EventManager(models.Manager):

    def running_now(self):
        now = timezone.now().strftime('%Y-%m-%d %H:%M:%S')
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT * FROM event_event WHERE
                start_date<='""" + now + """' AND end_date>='""" +
                           now + """' AND is_finished=0""")
            result_list = []
            for row in cursor.fetchall():
                entry = Event()
                entry.id = row[0]
                entry.name = row[1]
                entry.is_finished = row[2]
                entry.description = row[3]
                entry.start_date = row[4]
                entry.end_date = row[5]
                entry.icon = row[6]
                result_list.append(entry)
        return result_list

    def upcoming(self):
        now = timezone.now().strftime('%Y-%m-%d %H:%M:%S')
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT * FROM event_event WHERE
                start_date>='""" + now + """' AND is_finished=0""")
            result_list = []
            for row in cursor.fetchall():
                entry = Event()
                entry.id = row[0]
                entry.name = row[1]
                entry.is_finished = row[2]
                entry.description = row[3]
                entry.start_date = row[4]
                entry.end_date = row[5]
                entry.icon = row[6]
                result_list.append(entry)
        return result_list

    def past(self):
        now = timezone.now().strftime('%Y-%m-%d %H:%M:%S')
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT * FROM event_event WHERE
                start_date<='""" + now + """' AND end_date<='""" +
                           now + """' OR is_finished=1""")
            result_list = []
            for row in cursor.fetchall():
                entry = Event()
                entry.id = row[0]
                entry.name = row[1]
                entry.is_finished = row[2]
                entry.description = row[3]
                entry.start_date = row[4]
                entry.end_date = row[5]
                entry.icon = row[6]
                result_list.append(entry)
        return result_list


class Event(models.Model):

    name = models.CharField(max_length=100)
    is_finished = models.BooleanField('Is event finished?', default=False)
    description = models.TextField('description')
    start_date = models.DateTimeField('start date')
    end_date = models.DateTimeField('end date')
    icon = models.ImageField('Image/Poster', storage=fs)
    objects = EventManager()

    def __str__(self):
        return self.name


class RegisteredUser(models.Model):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    college = models.CharField(max_length=100)
    branch = models.CharField(max_length=100, default="")
    roll = models.CharField(max_length=100, default="")
    mobile = models.CharField(max_length=100, default="")
    email = models.EmailField()
    events = models.ManyToManyField(Event)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Suggestion(models.Model):

    content = models.TextField()
    email = models.EmailField()
    name = models.CharField(max_length=100)

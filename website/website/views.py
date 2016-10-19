from django.conf import settings
from django.shortcuts import redirect
from django.shortcuts import render
from django.utils import timezone
from django.views import View
from event.models import *
from os import listdir


class Home(View):
    def get(self, request, *args, **kwargs):
        mypath = settings.STATIC_ROOT + '/images/sponsor/'
        sponsors = ['/static/images/sponsor/' +
                    f for f in listdir(mypath) if f.startswith('sponsor')]

        context = {
            'past_event_list':
                Event.objects.filter(is_finished=True),
            'upcoming_event_list':
                Event.objects.filter(is_finished=False).exclude(
                    start_date__lte=timezone.now()),
            'ongoing_event_list':
                Event.objects.filter(start_date__lte=timezone.now()).exclude(
                    end_date__lte=timezone.now()),
            'sponsors': sponsors,
        }

        return render(request, 'index.html', context=context)


def redirect_to_home(request):
    return redirect('home')

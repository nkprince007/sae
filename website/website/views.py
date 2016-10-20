from django.conf import settings
from django.shortcuts import redirect
from django.shortcuts import render
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
                Event.objects.past(),
            'upcoming_event_list':
                Event.objects.upcoming(),
            'ongoing_event_list':
                Event.objects.running_now(),
            'sponsors': sponsors,
        }

        return render(request, 'index.html', context=context)


def redirect_to_home(request):
    return redirect('home')

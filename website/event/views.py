from .forms import EventRegisterForm
from django.http import HttpResponse
from django.shortcuts import render
from .models import *


def index(request):
    return HttpResponse("Welcome to Events.")


def register(request):
    if request.method == 'POST':
        form = EventRegisterForm(request.POST)
        if form.is_valid():
            user = RegisteredUser()
            user.last_name = form.cleaned_data['last_name']
            user.first_name = form.cleaned_data['first_name']
            user.college = form.cleaned_data['college']
            user.branch = form.cleaned_data['branch']
            user.roll = form.cleaned_data['roll']
            user.mobile = form.cleaned_data['mobile']
            events = request.POST.getlist('events')
            user.save()
            for event in events:
                user.events.add(Event.objects.get(pk=int(event)))
            return HttpResponse('Succesful Registration')
        else:
            return render(request, 'register.html', {'form': form})
    else:
        form = EventRegisterForm()
    return render(request, 'register.html', {'form': form})

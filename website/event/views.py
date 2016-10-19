from .forms import EventRegisterForm
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse("Welcome to Events.")


def register(request):
    form = EventRegisterForm()
    return render(request, 'register.html', {'form': form})

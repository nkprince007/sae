from .models import Event
from django import forms


class EventRegisterForm(forms.Form):
    first_name = forms.CharField(min_length=3)
    last_name = forms.CharField(min_length=3)
    college = forms.CharField(min_length=3)
    roll = forms.CharField(min_length=3)
    branch = forms.CharField(min_length=3)
    mobile = forms.CharField(min_length=3)
    email = forms.EmailField()
    try:
        events = forms.MultipleChoiceField(
            choices=[(obj.id, obj.name) for obj in Event.objects.upcoming() +
                     Event.objects.running_now()],
            widget=forms.CheckboxSelectMultiple,)
    except Exception:
        events = None

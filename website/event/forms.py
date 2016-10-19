from .models import Event
from django import forms


class EventRegisterForm(forms.Form):
    first_name = forms.CharField(min_length=3)
    last_name = forms.CharField(min_length=3)
    events = forms.ChoiceField(
        choices=[(obj.id, obj.name) for obj in Event.objects.all()],
        widget=forms.CheckboxSelectMultiple,)

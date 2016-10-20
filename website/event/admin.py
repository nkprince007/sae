from django.contrib import admin
from imagekit.admin import AdminThumbnail

from .models import Event, RegisteredUser


class EventAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'start_date',
                    'end_date', 'image_display')
    template = 'admin/image.html'
    image_display = AdminThumbnail(image_field='icon', template=template)
    image_display.short_description = 'Image'

    readonly_fields = ['image_display']


class RegisteredUserAdmin(admin.ModelAdmin):

    def has_add_permission(self, request):
        return False

    list_display = ['first_name', 'last_name', 'college',
                    'branch', 'roll', 'email', 'mobile']


admin.site.register(Event, EventAdmin)
admin.site.register(RegisteredUser, RegisteredUserAdmin)

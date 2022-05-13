from django.contrib import admin

from .models import User, AvatarImage, Organization, EventImage, Event

admin.site.register(User)
admin.site.register(AvatarImage)
admin.site.register(Organization)
admin.site.register(EventImage)
admin.site.register(Event)

# Register your models here.

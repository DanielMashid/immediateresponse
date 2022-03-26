from profile import Profile
from django.contrib import admin

from .models import Profile, AvatarImage, Organization, EventImage, Event

admin.site.register(Profile)
admin.site.register(AvatarImage)
admin.site.register(Organization)
admin.site.register(EventImage)
admin.site.register(Event)

# Register your models here.

from rest_framework import serializers

from .models import Profile, AvatarImage, Organization, EventImage, Event

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        field = "__all__"


class AvatarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvatarImage
        field = "__all__"


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        field = "__all__"       


class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        field = "__all__"  


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        field = "__all__"  

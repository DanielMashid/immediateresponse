from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=100)
    organization_number = models.IntegerField()
    avatar = models.CharField(max_length=100)  # temporary
    phone_number = models.IntegerField()
    is_supervisor = models.BooleanField()


class AvatarImage(models.Model):
    avatar_image = models.CharField(max_length=100)


class Organization(models.Model):
    organization_number = models.IntegerField()


class EventImage(models.Model):
    event_image = models.CharField(max_length=100)


class Event(models.Model):
    reported_user = models.CharField(max_length=100)  # temporary
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

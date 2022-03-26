from django.db import models

class Organization(models.Model):
    organization_number = models.IntegerField()
    

class AvatarImage(models.Model):
    avatar_image = models.CharField(max_length=100)

class User(models.Model):
    user_name = models.CharField(max_length=100)
    organization_number = models.ForeignKey(Organization,on_delete=models.CASCADE,related_name="orgumber")
    avatar = models.ForeignKey(AvatarImage, on_delete=models.CASCADE,related_name="avatarimg")  # temporary
    phone_number = models.IntegerField()
    is_supervisor = models.BooleanField()

class EventImage(models.Model):
    event_image = models.CharField(max_length=100)

class Event(models.Model):
    reported_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reportuser")  # temporary
    longitude = models.CharField(max_length=100)
    latitude = models.CharField(max_length=100)
    description = models.CharField(max_length=100)


from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Organization(models.Model):
    organization_number = models.IntegerField()


class AvatarImage(models.Model):
    avatar_image = models.CharField(max_length=100)


# made the user work one to one using django user manager.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    organization_number = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="orgumber", null=True)
    avatar = models.ForeignKey(AvatarImage, on_delete=models.CASCADE, related_name="avatarimg", null=True)  # temporary
    phone_number = models.IntegerField(null=True)
    is_supervisor = models.BooleanField(null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class EventImage(models.Model):
    event_image = models.CharField(max_length=100, null=True)


class Event(models.Model):
    objects = models.Manager()
    reported_user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="reportuser",
                                      null=True)  # temporary
    longitude = models.CharField(max_length=100, null=True)
    latitude = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=100, null=True)

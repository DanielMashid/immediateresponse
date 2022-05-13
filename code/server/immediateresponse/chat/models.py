from django.db import models
from django.utils import timezone

# Create your models here.


class Message(models.Model):
    objects = models.Manager()
    content = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    user = models.CharField(max_length=20)

    def __str__(self):
        return 'Message by %s' % self.user


class Chat(models.Model):
    objects = models.Manager()
    messages = models.ManyToManyField(
        Message, related_name="chat_messages", blank=True)
    room_name = models.CharField(max_length=128)

    def __str__(self):
        return '[%d] Chat \"%s\" has %d messages.' % (self.pk, self.room_name, self.messages.count())

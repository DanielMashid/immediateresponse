# Generated by Django 3.2.9 on 2022-05-08 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('room_name', models.CharField(max_length=128)),
                ('messages', models.ManyToManyField(blank=True, related_name='chat_messages', to='chat.Message')),
            ],
        ),
    ]

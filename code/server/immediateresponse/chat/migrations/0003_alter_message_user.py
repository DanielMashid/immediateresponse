# Generated by Django 3.2.9 on 2022-05-08 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_chat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='user',
            field=models.CharField(max_length=20),
        ),
    ]

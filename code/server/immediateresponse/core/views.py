
from django.http import HttpResponse
from .mail import send_email
from .serializer import EventSerializer
from .models import Event, Profile
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
import json

# get one incident info


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_incident(request):
    eventsInfo = Event.objects.filter(
        description=request.GET.get('incident', ""))
    serializerInfo = EventSerializer(eventsInfo, many=True)

    return Response(serializerInfo.data, status=status.HTTP_200_OK)

# get all incidents info


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_all_incidents(request):
    eventsInfo = Event.objects.all()
    serializerInfo = EventSerializer(eventsInfo, many=True)

    return Response(serializerInfo.data, status=status.HTTP_200_OK)

# post incident


@api_view(["POST"])
def report_incident_by_mail(request):
    id_incident = request.data.get('incident')
    latitude = request.data.get('latitude')
    longitude = request.data.get('longitude')
    send_email(id_incident, latitude, longitude)
    reported_incident = Event(reported_user=Profile.objects.get(
        id=1), latitude=latitude, longitude=longitude, description=id_incident)
    reported_incident.save()
    return HttpResponse("ok")

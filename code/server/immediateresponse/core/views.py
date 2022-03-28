from importlib.resources import contents
from multiprocessing import Event
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

# Create your views here.

#post incident post request
@api_view(['POST'])
@renderer_classes([JSONRenderer])
def post_incident(request):
    user_id = request.POST.get("user_id","")

    reported_user = request.Profile.objects.get(pk=user_id)
    longitude = request.POST.get("longitude","")
    latitude = request.POST.get("latitude","")
    description =  request.POST.get("description","")
    event = Event(reported_user, longitude,latitude,description)
    event.save()
    
    return Response('ok', status=status.HTTP_200_OK)
#

#get incident description
@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_incident_description(request):
    incident_id = request.GET.get('incident_id')
    event = Event.objects.get(pk=incident_id)
    event_type = event.description

    return Response(event_type, status=status.HTTP_200_OK)



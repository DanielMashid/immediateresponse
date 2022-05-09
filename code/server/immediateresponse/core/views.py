
from django.http import HttpResponse
from .mail import send_email
from .serializer import EventSerializer
from .models import Event
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
import json


# Create your views here.

# post incident post request
@api_view(['POST'])
@renderer_classes([JSONRenderer])
def post_incident(request):
    # parsed_content = json.loads(request.body)
    # parsed_content['user_id'] # the right way
    user_id = request.POST.get("user_id", "")
    reported_user = request.Profile.objects.get(pk=user_id)
    longitude = request.POST.get("longitude", "")
    latitude = request.POST.get("latitude", "")
    description = request.POST.get("description", "")
    event = Event(reported_user, longitude, latitude, description)
    event.save()

    return Response('ok', status=status.HTTP_200_OK)


#

# get incident info
@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_incident(request):
    parsed_content = json.loads(request.body)
    event = Event.objects.get(pk=parsed_content['id'])
    event_json = EventSerializer(event)

    return Response(event_json.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def report_incident_by_mail(request):
    id_incident = request.data.get('incident')
    latitude = request.data.get('latitude')
    longitude = request.data.get('longitude')
    send_email(id_incident, latitude, longitude)
    return HttpResponse("ok")

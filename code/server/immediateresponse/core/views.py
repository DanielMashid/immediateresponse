
from importlib.resources import contents
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response




# Create your views here.

# #
# @api_view(['POST'])
# @renderer_classes([JSONRenderer])
# def get_incident(request):
#     reported_user = request.user_name
#     longitude = request.GET.get('longitude')
#     latitude = request.GET.get('latitude')
#     description = request.GET.get('description')
#     return Response(status=status.HTTP_200_OK)
# #



from django.urls import path

from . import views

urlpatterns ={
    path('api/post_incident/',views.get_incident),
    path('api/get_incident_description/',views.get_incident_description),

}
from django.urls import path

from . import views

urlpatterns ={
    path('api/get_incident/',views.get_incident)
}
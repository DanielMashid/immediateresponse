from django.urls import path

from . import views

urlpatterns ={
    path('post_incident/',views.post_incident),
    path('get_incident/',views.get_incident),

}
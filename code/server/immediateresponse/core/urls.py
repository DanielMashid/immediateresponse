from django.urls import path

from . import views

urlpatterns = [
    path('get_incident/', views.get_incident),
    path('get_all_incidents/', views.get_all_incidents),
    path('report_incident_by_mail/', views.report_incident_by_mail),
]

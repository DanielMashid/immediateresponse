from django.urls import path

from . import views

urlpatterns = [
    path('api/get_incident/', views.get_incident),
    path('api/get_all_incidents/', views.get_all_incidents),
    path('api/report_incident_by_mail/', views.report_incident_by_mail),
]

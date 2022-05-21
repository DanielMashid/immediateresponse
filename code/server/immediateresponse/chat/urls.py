# chat/urls.py
from django.urls import path

from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    # path('<str:room_name>/', views.room, name='room'),
    path('get-chatroom/', views.get_chatroom, name='get-chatroom'),
    path('new-chatroom/', views.new_chatroom, name='new-chatroom'),
    path('new_msg/', views.new_msg, name='new_msg'),
]

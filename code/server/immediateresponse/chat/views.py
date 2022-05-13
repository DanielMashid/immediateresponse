from email import message
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

from .serializer import ChatSerializer, MessageSerializer
from .models import Chat, Message
from rest_framework.decorators import api_view
import json


# def index(request):
#     return render(request, 'chat/index.html', {})


# def room(request, room_name):
#     return render(request, 'chat/room.html', {
#         'room_name': room_name
#     })


@api_view(['GET'])
def get_chatroom(request):
    # Format
    # room_id - ID (int)
    room_id = request.GET['room_id']

    try:
        chatroom = Chat.objects.get(pk=room_id)
    except Chat.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    data = []

    messages_serialized = MessageSerializer(chatroom.messages.all(), many=True)
    chat_serialized = ChatSerializer(chatroom)

    data.append(chat_serialized.data)
    data.append(messages_serialized.data)

    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def new_chatroom(request):
    # Format
    # room_name = string
    parsed_contet = json.loads(request.body)

    new_chat = Chat(room_name=parsed_contet['room_name'])
    new_chat.save()

    new_chat_serialized = ChatSerializer(new_chat)

    return Response(new_chat_serialized.data, status=status.HTTP_200_OK)

from email import message
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

from .serializer import ChatSerializer, MessageSerializer
from .models import Chat, Message
from rest_framework.decorators import api_view
import json


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


@api_view(['POST'])
def new_msg(request):
    # Format
    # room_id = int
    # user = string
    # content = string

    parsed_contet = json.loads(request.body)

    new_message = Message(
        user=parsed_contet['user'], content=parsed_contet['content'])
    new_message.save()
    chat = Chat.objects.get(pk=parsed_contet['room_id'])
    chat.messages.add(new_message)
    chat.save()

    return Response(status=status.HTTP_200_OK)

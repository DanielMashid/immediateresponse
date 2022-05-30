"""
WSGI config for immediateresponse project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""
import os
import sys

from django.core.wsgi import get_wsgi_application

SERVER_BASE = 'c:/Apache24/_projects/immediateresponse/server'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'immediateresponse.settings')

sys.path.append(SERVER_BASE)
sys.path.append(f'{SERVER_BASE}/immediateresponse')
sys.path.append(f'{SERVER_BASE}/core')
sys.path.append(f'{SERVER_BASE}/chat')

application = get_wsgi_application()

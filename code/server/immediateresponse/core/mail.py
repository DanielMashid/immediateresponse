# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
import logging
from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY", default=None)

# temporary dictionary
supervisorMail = {
    "estuary_incident": ["danielmashid1@gmail.com"],
    "security_incident": ["danielmashid1@gmail.com"],
    "safety_person_incident": ["danielmashid1@gmail.com"],
    "fire_incident": ["danielmashid1@gmail.com", "dorx33@gmail.com"],
    "materials_incident": ["danielmashid1@gmail.com"],
    "safety_property_incident": ["danielmashid1@gmail.com"],
}

# temporary dictionary
contentHeaderMail = {
    "estuary_incident": '<h1>התקבלה התרעה על שפך</h1>',
    "security_incident": '<h1>התקבלה התרעה על אירוע ביטחוני</h1>',
    "safety_person_incident": '<h1>התקבלה התרעה על בטיחות פגיעה באדם</h1>',
    "fire_incident": '<h1>התקבלה התרעה על שריפה</h1>',
    "materials_incident": '<h1>התקבלה התרעה על חומר מעשן</h1>',
    "safety_property_incident": '<h1>התקבלה התרעה על בטיחות פגיעה ברכוש</h1>',
}

subject = 'תגובה מיידית-התקבלה התראה חדשה'
from_email = 'immediate.response.sos@gmail.com'


def mail_content(latitude, longitude):
    content = f"<h2>מיקום האירוע</h2>" \
              f"<p>latitude is: {latitude}</p> <p>longitude is: {longitude}</p>" \
              f"<h3>Google Maps Reverse Geolocation</h3> https://maps.google.com/maps?z=12&t=m&q=loc:{latitude}+{longitude}"
    return content


def send_email(id_incident, latitude, longitude):
    content = contentHeaderMail[id_incident] + mail_content(latitude, longitude)
    print(content)
    message = Mail(
        from_email=from_email,
        to_emails=supervisorMail[id_incident],
        subject=subject,
        html_content=content,
    )
    print(message)
    try:
        # sg = SendGridAPIClient('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')
        print("API Key: " + SENDGRID_API_KEY)
        sg = SendGridAPIClient("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")
        response = sg.send(message)
        print(response)
    except Exception as e:
        print("in except")
        print(e.message)

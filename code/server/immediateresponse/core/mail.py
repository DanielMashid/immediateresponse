# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
import logging
from django.conf import settings
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# temporary dictionary
supervisorMail = {
    "estuary_incident": ["danielmashid1@gmail.com", ],
    "security_incident": ["danielmashid1@gmail.com"],
    "safety_person_incident": ["danielmashid1@gmail.com"],
    "fire_incident": ["danielmashid1@gmail.com"],
    "materials_incident": ["danielmashid1@gmail.com"],
    "safety_property_incident": ["danielmashid1@gmail.com"],
}

# temporary dictionary
contentHeaderMail = {
    "estuary_incident": '<h1> התקבלה התרעה על שפך</h1>',
    "security_incident": '<h1> התקבלה התרעה על אירוע ביטחוני</h1>',
    "safety_person_incident": '<h1> התקבלה התרעה על בטיחות פגיעה באדם</h1>',
    "fire_incident": '<h1> התקבלה התרעה על שירפה</h1>',
    "materials_incident": '<h1> התקבלה התרעה על חומר מעשן</h1>',
    "safety_property_incident": '<h1> התקבלה התרעה על בטיחות פגיעה ברכוש</h1>',
}

subject = 'תגובה מיידית-התראה חדשה'


def send_email(from_email, id_incident, subject, html_content):
    # location = '<img src={"https://maps.googleapis.com/maps/api/staticmap?&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY}></img>'
    message = Mail(
        from_email=from_email,
        to_emails=supervisorMail["estuary_incident"],
        subject=subject,
        html_content=contentHeaderMail["estuary_incident"]
    )
    try:
        sg = SendGridAPIClient('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')
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)


send_email("immediate.response.sos@gmail.com", "estuary_incident", subject, "estuary_incident")

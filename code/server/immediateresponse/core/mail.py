# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.conf import settings

# temporary dictionary
supervisorMail = {
    "estuary_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
    "security_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
    "safety_person_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
    "fire_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
    "materials_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
    "safety_property_incident": ["dornakashmag@gmail.com", "hay.be.sapir.sos@gmail.com", "immediate.response.sos@gmail.com"],
}

# temporary dictionary
contentHeaderMail = {
    "estuary_incident": 'שפך',
    "security_incident": 'אירוע ביטחוני',
    "safety_person_incident": 'פגיעה באדם',
    "fire_incident": 'שריפה',
    "materials_incident": 'חומר מעשן',
    "safety_property_incident": 'פגיעה ברכוש',
}

subject = 'תגובה מיידית-התקבלה התראה חדשה'
from_email = 'immediate.response.sos@gmail.com'


def mail_content(latitude, longitude, id_incident):
    incident_type = contentHeaderMail[id_incident]
    content = f'<h1>התקבלה התרעת בטיחות: {incident_type}</h1>'\
              f"<h2>פרטי האירוע:</h2>" \
              f"<h3>מיקום האירוע (קווי אורך ורוחב)</h3>" \
              f"<p>latitude is: {latitude}</p> <p>longitude is: {longitude}</p>" \
              f'<a href = "https://maps.google.com/maps?z=12&t=m&q=loc: {latitude}+{longitude}" target = "blank">' \
              "<h2>Google Maps</h2>" \
              f'<a href = "http://{settings.SERVER_ADDRESS}/chat" target = "blank"><h2>Online Chat</h2>'
    return content


def send_email(id_incident, latitude, longitude):
    content = mail_content(latitude, longitude, id_incident)
    print(content)
    message = Mail(
        from_email=from_email,
        to_emails=supervisorMail[id_incident],
        subject=subject,
        html_content=content,
    )
    print(message)
    try:
        print("API Key: " + settings.SENDGRID_API_KEY)
        sg = SendGridAPIClient(settings.SENDGRID_API_KEY)
        response = sg.send(message)
        print(response)
    except Exception as e:
        print("in except")
        print(e.message)

# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

SENDGRID_API_KEY = os.environ.get("SENDGRID_API_KEY", default=None)

# temporary dictionary
supervisorMail = {
    "estuary_incident": ["danielmashid1@gmail.com"],
    "security_incident": ["danielmashid1@gmail.com"],
    "safety_person_incident": ["danielmashid1@gmail.com"],
    "fire_incident": ["danielmashid1@gmail.com"],
    "materials_incident": ["danielmashid1@gmail.com"],
    "safety_property_incident": ["danielmashid1@gmail.com"],
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
              f"<a href = ""http://localhost:3000/chat"" target = ""blank"">""<h2>Online Chat</h2>"
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
        print("API Key: " + SENDGRID_API_KEY)
        sg = SendGridAPIClient("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")
        response = sg.send(message)
        print(response)
    except Exception as e:
        print("in except")
        print(e.message)

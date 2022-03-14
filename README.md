# ticketmaster-challenge

This is my submission for the ticketmaster take home challenge.
For this challenge, I have decided to focus on the sign in page and have the email address pre-populated onto the form.
I used localStorage getters and setters to store the username and populate the email field.
I created a test user object for the username and password which is used in the validation of the sign in page.

## Username & password for testing:
username = Ahoa@test.com
password = testing

## case study

At Ticketmaster we have a specific scenario where an event might currently have no tickets available, but more might appear in the future (for example, if a promotor releases more tickets for us to sell).

As such, we want to avoid the scenario where a fan visits an event details page, sees that there are no tickets and assumes that it's sold out or completely unavailable.

To facilitate this we have the ability to add fans to a waiting list, which will allow them to be notified if more tickets become available for sale.

The waiting list form is accessed from a "join the waiting list" button which renders on an event details page if it currently has no tickets available.

The design of the form is attached and there are a number of features required, as follows:

- A fan can be notified via email or SMS, so the form should allow submission of email address and/or mobile phone number
- A fan must be signed in to Ticketmaster in order to add themselves to the waiting list. If they're not signed in, we'll prompt them to sign in when they click the "join the waiting list" button.
- Once a fan is signed in, we'll have their email address, so we will pre-fill the email address field with it
- A fan can optionally add their phone number to the form
- If a fan adds a phone number, they should be given the option to disallow contact via email
- A fan should not be allowed to submit an empty form
- Successful submission of the form should send a POST request to the waiting list API which will return a success or error response
- The waiting list API should be called when the form loads, to prevent adding the fan to the waiting list multiple times. If the fan is already on the waiting list the fan should see a message informing them of that

## screenshots

![Sign in failed] (https://github.com/ahoat/ticketmaster-challenge/blob/main/signInFail.JPG)

## User Stories

- As a fan, I would like to be able to join a waiting list and be notified either by email and/or SMS when tickets become available
- As a user, I would like to have the choice of how I would like to be notified of ticket releases
- I would like to be able to see if I am signed in or not
- For ease, I would like to have my details pre-filled once I have signed in
- I should not be able to submit a blank form
- I would like visual feedback if my submission has been submitted successfully
- I should not be allowed to join the waiting list more than once and would like visual feedback that I have already joined the waiting list


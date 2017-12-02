# angular-contacts

![Demo](https://user-images.githubusercontent.com/30091921/33512063-b83e6c12-d6ed-11e7-8091-c0612828e793.gif)

#### This project accomplishes the following with AngularJS:

- Insert a navbar with links to four routes
- Add google authentication
- Once a user successfully logs in their uid should set in $rootScope
- Create 10 contacts
- On the /contacts/new page build out the html for adding a new contact
- If user is NOT authenticated: the only link they should see in the navbar is /login
and they should not be able to access /contacts/view, /contacts/new, or /contacts/favorites
- If user tries to access one of the contact routes they should be redirected to /auth
- When an authenticated user clicks the logout link in the navbar they should be logged out and redirected to /login
- A user should not be able to submit a contact without putting information in each input on the form
- On successful save to Firebase, the page should redirect to /contacts/view and the new contact should be visible
- Clicking a delete button should remove the contact from Firebase and then that contact should not show up in the DOM
- When a user starts typing in a name it should filter the contacts to only show ones that match what they have searched for
- Add any feature of your choice. Your feature must affect Firebase in some way - either post or put (I added a contact note feature)
- Once you are finished deploy the app to Firebase





https://angular-contacts-673f5.firebaseapp.com
# React + Firebase Auth Boilerplate.

This is a boilerplate to be used on future projects as a sign up / login module using an email and password, with password reset.

Using React's context API, a user-content works with Firebase Authentication to log in a user and provide context throughout the entire app.

## Technologies used:

- React.js
- Firebase
- Bootstrap / React-Bootstrap

### Installation reference:

- Installing Firebase: npm i firebase
- Installing Bootstrap/React Bootsrap : npm i bootstrap react-bootstrap

### Firebase hosting steps

In project root directory, run:

1. npm run build
2. firebase init


    - select "hosting"
    - Public directory: build
    - Single Page: Yes
    - Github: No
    - Overwrite: No

3. Run: npm run deploy


    - This script is in package.json, and will deploy all firebase related aspects of the project.
    - You can also run: npm run deploy:hosting , to only deploy hosting configuration.

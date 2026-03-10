# User Register

## From User Perspective
1. form fill up
2. Click register button

## From Developer Perspective
1. Destructuring form data (eg:- Fullname, email, password)
2. Validation of form data (eg:- All fields are required)
3. Check email from database (eg:- Must be unique)
4. Hash the password
5. Send token and store it to fromtend(either in localhost or in cookies)
6. Store it to dataabase
7. Send message.. (https status code: Main for now-)
    - 200 ("Success Response")
    - 201 ("New data created")
    - 400 ("Bad request")
    - 404 ("Not Found")
    - 500 ("Internal server error")
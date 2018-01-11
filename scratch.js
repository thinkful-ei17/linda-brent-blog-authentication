'use strict';

// Add a User schema to models.js which stores a username, password, first name, and last name
// Add hashPassword and validatePassword methods to to the schema for creating a password hash, and checking that a password is correct


// Add an apiRepr method to the schema which creates a representation of the user which can be securely used as part of the API(i.e.doesn't contain the password!)
Add a / users POST endpoint to server.js which:
  Recieves a JSON request body in the following format:

  {
    "username": "alice_user",
    "password": "topsecret",
    "firstName": "Alice",
    "lastName": "Bobson"
  }
Returns a 400 Bad Request status if a user already exists with a matching username

Adds the user to the database, storing a salted and hashed version of the password

Returns a 201 Created status, with the API representation of the user as the response body
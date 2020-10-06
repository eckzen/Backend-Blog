Starting this project

- Run Start MongoDB.bat
- Run MongoDB Compass Community
- Run Postman
- npm install(to install all dependencies)

Create .env file

- no qoutes needed for the value
  PORT = 'port number '
  MONGODB_URI = 'localhost'
  DB_NAME = 'Database name'
  JWT_SECRET = 'secret key here'

- Run in development mode
  \$ npm run backend

- Register a User
  POST http://localhost:5000/users/register
- Body > raw
  {
  "email": "email here",
  "password": "password here",
  "passwordCheck":"retype password",
  "displayName":"display name here"
  }

- Login User
  POST http://localhost:5000/users/login
- Body > raw
  {
  "email": "email here",
  "password": "password here"
  }

- Logout a User
  DEL http://localhost:5000/users/logout
- Headers
  KEY - x-auth-token
  VALUE - token value

- Check if token is Valid
  POST http://localhost:5000/users/tokenIsValid
- Headers
  KEY - x-auth-token
  VALUE - token value

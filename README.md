# MERN AUTH TUTORIAL PROJECT
<p> I am currently learning the MERN stack, and this is a tutorial project I followed that uses Express and Node for the backend alongside JWT and HTTP only cookie. On the frontend we use React, React Bootstrap, and Redux Toolkit to manage state. I am still learning and this project is more about learning how all these different technologies tie in together rather than knowing every single syntax and functionallity. </p>
<p> This tutorial project is from Youtube by <a href= "https://www.youtube.com/watch?v=R4AhvYORZRY" target ="_blank"> Travesy Media </a></p>

## Here's more about the project itself
### MERN Authentication Starter

This is a starter app for a MERN stack application with authentication. This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vite.dev) Build tool. This authentication workflow is based off of my [MERN Stack From Scratch | eCommerce](https://www.traversymedia.com/mern-stack-from-scratch) course.

<img src="./frontend/public/screen.png" />

It includes the following:

- Backend API with Express & MongoDB
- Routes for auth, logout, register, profile, update profile
- JWT authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register, login, logout, view profile, and update profile
- React Bootstrap UI library
- React Toastify notifications

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

Change the JWT_SECRET to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

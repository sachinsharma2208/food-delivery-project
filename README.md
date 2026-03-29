# Food Delivery Platform (MERN Stack)

A full-stack food delivery application built using the MERN stack, designed to handle user authentication, product management, and order processing with a structured and scalable architecture.

---

## Live Deployment

- Frontend: [https://your-frontend.vercel.app](https://food-delivery-project-lac.vercel.app/) 
- Backend: [https://your-backend.onrender.com](https://food-delivery-project-4lqu.onrender.com)

---

## Overview

This project implements a complete client-server architecture where users can browse food items, manage their cart, and place orders. The backend exposes RESTful APIs and ensures secure data handling, while the frontend delivers a responsive and intuitive interface.

---

## Core Features

### Authentication
- JWT-based authentication and authorization  
- Protected routes using middleware  
- Secure password storage  

### User Functionality
- Browse and filter food items  
- Add/remove items from cart  
- Place and manage orders  

### Admin Functionality
- Create, update, and delete food items  
- Manage user orders  

---

## Technology Stack

### Frontend
- React.js  
- Axios  
- CSS / Tailwind CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB (Atlas)

### Authentication
- JSON Web Tokens (JWT)

### Deployment
- Vercel (Frontend)  
- Render (Backend)  

## Environment Variables

Create a `.env` file in the backend directory:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

## Setup Instructions

* Backend setup

cd backend
-npm install
-npm start/ npm server/ node server.js

* Frontend setup

cd frontend
-npm install
-npm run dev

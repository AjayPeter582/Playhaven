# 🎥 Play Haven – MERN-Based Video Streaming Platform with Social Chat

**Play Haven** is a dynamic, full-stack video streaming platform built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack. The platform emphasizes real-time **chat features** to let users share movie links, feedback, and engage in interactive conversations—creating a social hub around multimedia content.

> 🗨️ Core Feature: Real-time chat system for sharing movies and feedback  
> ⚡ Designed for performance, scalability, and usability  
> 🔒 Powered by JWT authentication and secure backend APIs  
> 💡 Developed using both forward and reverse engineering practices

---

## 🌐 Live Demo

[🔗 Click Here to Visit Play Haven](https://your-deployed-link.com) *(Replace with your actual deployed URL)*

---

## 🚀 Features

- 💬 **Interactive Chat System**: Users can chat, share links, and exchange feedback on videos  
- 🎬 **Video Upload & Streaming**: Upload and stream videos with smooth playback  
- ⭐ **User Ratings**: Rate and review content  
- 🎯 **Personalized Filtering**: Get content recommendations based on preferences  
- 🛡️ **JWT Authentication**: Secure login and user session management  
- 📱 **Responsive Design**: Optimized for desktop and mobile screens  
- ⏬ **Lazy Loading**: Loads content efficiently for better performance  
- ⚙️ **RESTful API Backend**: Scalable and modular backend design  

---


---

## 🛠️ Tech Stack

| Frontend              | Backend               | Database   | Authentication  |
|-----------------------|------------------------|------------|-----------------|
| React.js              | Node.js, Express.js    | MongoDB    | JWT, bcrypt     |
| Axios, React Router   | Multer (for uploads)   | Mongoose   |                 |
| Socket.io             | WebSocket              |            |                 |

---

## 📦 Installation

### 🔧 Prerequisites

- Node.js & npm  
- MongoDB installed locally or via MongoDB Atlas

### ⚙️ Backend Setup

cd client
npm install
npm start

### ⚙️ Backend Setup

```bash
cd server
npm install
touch .env
# Add the following to .env:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
npm start


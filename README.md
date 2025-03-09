![banner](HackaMan.png)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

# HackaMan - Your One-Stop Solution for Hackathon Project Management

## 🚧Project Under Developement🚧

Are you tired of managing multiple hackathon teams through WhatsApp groups or Discord? **HackaMan** is here to simplify your experience!

**HackaMan** is a web-based application designed to help users efficiently manage their hackathon projects and teams. With features like:

- **Multi-Project Management**
- **Team Collaboration & Planning**
- **Kanban Board for Task Tracking**
- **AI Assistant for Project Guidance & Debugging**

It ensures that you stay on top of your project deadlines and team progress during hackathons!

---

## Installation Guide

### Prerequisites

- **MongoDB Database Access**
- **Verified SendGrid Sender Email and API Key** 📩

### - Backend Setup

```bash
cd backend
npm install
cp .env.template .env  # Rename and configure your .env file
npm start
```

### - Frontend Setup

```bash
cd frontend
npm install
```

Now, update `vite.config.js` to match your backend port:

```javascript
proxy: {
    "/auth": "http://localhost:<BACKEND_PORT>",
    "/util": "http://localhost:<BACKEND_PORT>",
},
```

Then, start the frontend server:

```bash
npm run dev
```

---

## Project Structure

```
HackaMan/
│── backend/
│   ├── controllers/        # Request handling logic
│   ├── db/                # Database connection setup
│   ├── middlewares/       # Middleware functions
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── templates/         # Email & API templates
│   ├── .env               # Environment variables
│   ├── app.js             # Backend entry point
│   ├── package.json       # Backend dependencies
│
│── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── context/       # Global state management
│   │   ├── hooks/         # Reusable custom hooks
│   │   ├── layouts/       # Page layouts
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Application pages
│   │   ├── index.css      # Global styles
│   │   ├── main.jsx       # Frontend entry point
|   ├── index.html         # Main index html file serve to client
│   ├── vite.config.js     # Vite server config
│   ├── package.json       # Frontend dependencies
```

---

## 🚀 Tech Stack

### 🔹 Backend

- **Express.js** - Fast and lightweight Node.js framework
- **MongoDB + Mongoose** - Database and ODM
- **JWT Authentication and Bcrypt** - Secure user authentication with proper encryption and decryption
- **Nodemailer** - Email services using SendGrid Transporter

### 🔹 Frontend

- **React.js** - Component-based Javascript UI library
- **ShadCN UI + TailwindCSS** - Modern UI styling
- **React Hook Form** - Form management
- **Zod** - Schema validation for forms and APIs
- **Axios** - API communication

---

## Contact

For any issues or collaboration, feel free to reach out **Gitanshu sankhla**:

[![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gitax18) [![LinkedIn-social](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gitanshu-sankhla)
[![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/gitanshusankhla)

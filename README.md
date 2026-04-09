# Devgram 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg?style=for-the-badge&logo=vercel)](https://devgram-brx9.onrender.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

Devgram is a rich, modern, and interactive social media web application designed to bring developers and users together. Built with a robust MERN stack, Devgram boasts unique, AI-driven features like **Moodify**—which scans your facial emotion to magically deliver personalized content.

🔥 **[Experience the Live Demo Here!](https://devgram-brx9.onrender.com/)**

---

#✨ Outstanding Features

- 🎭 **Moodify (AI Emotion Detection):** Utilizes Google MediaPipe to scan your face via webcam in real-time, instantly detecting your mood and dynamically filtering reels and posts to match how you feel.
- 📱 **Seamless Social Experience:** Create, like, save, and comment on posts smoothly, just like your favorite social platforms. Follow other users to build your network.
- 🎞️ **Immersive Reels:** Endless scrollable video feeds with a custom Intersection Observer implementation that smartly auto-plays and pauses videos as you scroll.
- 🎨 **Sleek UI/UX:** A stunning, fully responsive Dark Mode interface built natively with Tailwind CSS, featuring glassmorphism, fluid animations, and a rich aesthetic.
- 🔐 **Secure Authentication:** Robust JWT-based authentication ensures your data and identity remain private and secure.

## 🛠️ Technology Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Google MediaPipe Solutions (Vision Tasks)
- React Router DOM
- React Icons

**Backend:**
- Node.js & Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Cloudinary (for Media Storage)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed on your local machine. You will also need API keys for Cloudinary to handle image & video uploads.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/devgram.git
   cd devgram
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   # Create a .env file and add your MongoDB URI, JWT Secret, and Cloudinary keys
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd ../frontend
   npm install
   # Create a .env file and add your backend API URL if needed
   npm run dev
   ```

## 🧠 What I Learned
Building Devgram was an incredible journey that pushed the boundaries of standard web development. I successfully integrated advanced Machine Learning models directly into the browser using **Google MediaPipe**, learned how to efficiently handle heavy video streaming with Intersection Observers, and mastered complex state management using React Context and Hooks. 

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

*If you liked this project, please consider leaving a ⭐ on the repository!*

# Dhiraj Raut - Full Stack Portfolio (MERN Stack)

A modern, high-performance developer portfolio website built with the **MERN Stack** (MongoDB, Express, React, Node.js), featuring a dark midnight theme, ambient cyan radial glows, glassmorphism containers, and interactive section filters.

![Theme](https://img.shields.io/badge/Theme-Dark%20Midnight%20%26%20Cyan-00f2fe)
![Stack](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-cyan)

---

## 🎨 Design System & Visual Blueprint
- **Base Background**: Deep midnight `#060b17` with ambient cyan (`#00f2fe`) and sky blue (`#4facfe`) glowing radial orbs.
- **Card Surfaces**: Translucent glassmorphism (`bg-[#0c1527]/70 border border-slate-800/90 backdrop-blur-md rounded-2xl`).
- **Accent Elements**: Cyan gradient text, glowing hover states, and active pill navigation.
- **Typography**: Clean modern sans-serif typography with high contrast white headings and electric cyan keyword highlights.

---

## 🚀 Sections Included
1. **Floating Pill Navbar**: Fixed glass pill with active section spy, smooth scrolling, and theme toggle.
2. **Hero Section**:
   - Left: Greeting, custom headline, bio, "View Projects" (cyan glow) & "Contact Me" CTAs, social links (GitHub, LinkedIn, LeetCode).
   - Right: Framed portrait card with neon glowing borders, fallback developer avatar, and SDE intern badge.
3. **About Me**: Narrative biography with colored highlight spans + 2x2 highlight cards (Performance Optimizer, Full Stack Developer, Competitive Programmer, ML & Systems).
4. **Work Experience**: Vertical timeline featuring your **Software Development Engineer Internship at Zensar Technologies** (efficiency gains, API latency reduction, defect reduction).
5. **Recent Projects**: Category filter tabs (`All Projects`, `Web Apps`, `ML / AI`) with project cards for **WanderLust** (Full Stack Rental Platform), **IntelliStroke** (CNN-LSTM Stroke Prediction), and **DevPulse Collaborative Suite**.
6. **Technical Skills**: Tabbed filter (`All Skills`, `Frontend`, `Backend`, `Languages`, `Tools`) with 6-column icon grid cards.
7. **Certificates & Qualifications**: Responsive 3-column certificate cards with platform filters (`Coursera`, `IBM`, `HackerRank`, `Cloud & Data`) and direct credential links.
8. **Achievements**: Recognition cards for **LeetCode Peak 1616 (778 solved)**, **HackerRank 5-Star Badges**, **Mastercard CodeForChange Hackathon (2nd Runner-up)**, **Smart India Hackathon (SIH 2025 Participant)**, and **Blue Bit Hackathon (4th Rank)**.
9. **Contact Section & Backend**: Contact info cards on the left; functional glassmorphic contact form on the right wired to the Express.js and MongoDB backend.
10. **Floating Chat Widget**: Fixed cyan circular chat trigger in the bottom right corner with interactive popup.
11. **Footer**: Clean copyright and quick links.

---

## 📁 Directory Structure
```
Portfolio_/
├── client/                     # Frontend (React + Vite + Tailwind CSS)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── profile.png    # Place your headshot photo here!
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── FloatingChat.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── SocialIcons.jsx
│   │   ├── data/
│   │   │   └── portfolioData.js  # All portfolio data centralized here
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                     # Backend (Node.js + Express + MongoDB)
│   ├── config/
│   │   └── db.js              # Resilient MongoDB connection
│   ├── models/
│   │   └── ContactMessage.js  # Mongoose model
│   ├── routes/
│   │   └── contactRoutes.js   # POST & GET /api/contact
│   ├── .env                   # Environment variables
│   ├── .env.example
│   └── server.js
├── package.json                # Root package.json with concurrently scripts
└── README.md
```

---

## 🛠️ Quick Start Guide

### 1. Install Dependencies
All dependencies are already installed. If you ever need to reinstall:
```bash
npm install
npm install --prefix client
npm install --prefix server
```

### 2. Configure MongoDB (Optional)
In `server/.env`:
```env
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
CLIENT_URL=http://localhost:8081
```
*(Note: If MongoDB is offline, the backend automatically logs and stores messages gracefully in memory so the app never crashes!)*

### 3. Run Frontend & Backend Concurrently
From the project root:
```bash
npm run dev
```
- **Frontend**: `http://localhost:8081`
- **Backend API**: `http://localhost:8080`

### 4. Custom Headshot Photo
Place your portrait photo at:
```
client/src/assets/profile.png
```
The Hero section will automatically display it inside the neon-bordered portrait frame!

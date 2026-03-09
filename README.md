# MERN Project Template

A ready-to-use **MERN stack** project template with **React, Express, MongoDB**, and commonly used libraries preconfigured.  
This template helps you quickly start new projects without repeatedly setting up the same tools and boilerplate code.

---

## Why This Template Exists

Every MERN project requires similar setup: frontend with React, backend with Express, database with MongoDB, authentication, file uploads, and routing.  
Instead of manually installing and configuring everything each time, this template provides a working example with **dummy code**, so you can start coding your application immediately.

---

## What It Contains

- **Main branch**: Both client and server code together. Ready to run full MERN stack projects.  
- **Client branch**: React frontend only, so it can be used with any backend framework, not just Express.  
- **Server branch**: Express backend only, so it can be used with any frontend framework or app.

This setup allows flexibility to pick the part you need depending on your project requirements.

---

## Project Setup

### Prerequisite

- **npm** (Node.js package manager)

### Setup Both Backend and Frontend in One Terminal

Run the following commands in one go:

```bash
# Clone the repo
git clone https://github.com/bishalbhat2002/Project-Starter-Template.git
cd project-template

# Setup backend
cd server
npm install
cp .env.example .env    # update with your environment variables

# Setup frontend
cd ../client
npm install

# Start both backend and frontend
cd ../server && npm run dev & cd ../client && npm start

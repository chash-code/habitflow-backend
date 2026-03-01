# ⚙️ HabitFlow - Backend API

> REST API powering the HabitFlow habit tracking app

## 🌐 Live API
https://habitflow-backend-gqzx.onrender.com

## 📋 Project Overview
This is the backend server for HabitFlow built 
with Node.js and Express.js. It handles user 
authentication, habit management, and daily 
habit log tracking using Supabase as database.

## 🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| Supabase | PostgreSQL Database |
| JWT | Authentication |
| CORS | Cross Origin Requests |

## 📁 Folder Structure
backend/
|── controllers/
|   |── authController.js
|   |── habitController.js
|   └── logController.js
|── routes/
|   |── authRoutes.js
|   |── habitRoutes.js
|   └── logRoutes.js
|── middleware/
|   └── auth.js
|── config/
|   └── supabase.js
└── server.js
## 📡 API Documentation

### 🔐 Auth Routes
POST /api/auth/signup
Body: { name, email, password }
Response: { message, data }
POST /api/auth/login
Body: { email, password }
Response: { message, data: { user, session } }
POST /api/auth/logout
Response: { message }
### 📋 Habit Routes
GET /api/habits
Headers: Authorization: Bearer token
Response: [ array of habits ]
POST /api/habits
Headers: Authorization: Bearer token
Body: { name, category, difficulty, frequency }
Response: { habit object }
PUT /api/habits/:id
Headers: Authorization: Bearer token
Body: { name, category, difficulty, frequency }
Response: { updated habit }
DELETE /api/habits/:id
Headers: Authorization: Bearer token
Response: { message }
### 📊 Log Routes
GET /api/logs
Headers: Authorization: Bearer token
Response: [ array of logs ]
POST /api/logs
Headers: Authorization: Bearer token
Body: { habit_id, completed_at, notes }
Response: { log object }
DELETE /api/logs/:id
Headers: Authorization: Bearer token
Response: { message }
## 🗄️ Database Schema

### habits table
| Column | Type | Description |
|---|---|---|
| id | UUID | Primary Key |
| user_id | UUID | Foreign Key to auth.users |
| name | VARCHAR | Habit name |
| category | VARCHAR | Health/Fitness/Learning etc |
| difficulty | VARCHAR | easy/moderate/hard |
| frequency | VARCHAR | daily/weekly |
| created_at | TIMESTAMP | Creation time |

### habit_logs table
| Column | Type | Description |
|---|---|---|
| id | UUID | Primary Key |
| habit_id | UUID | Foreign Key to habits |
| user_id | UUID | Foreign Key to auth.users |
| completed_at | DATE | Completion date |
| notes | TEXT | Optional notes |
| created_at | TIMESTAMP | Creation time |

## ⚙️ Installation Steps
```bash
# Clone the repository
git clone https://github.com/chash-code/habitflow-backend

# Go into folder
cd habitflow-backend

# Install dependencies
npm install

# Create .env file

VITE_SUPABASE_URL=https://rmqcvkgvzhpladfeqrzs.supabase.col
VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtcWN2a2d2emhwbGFkZmVxcnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyOTM3OTksImV4cCI6MjA4Nzg2OTc5OX0.9hrOLnlSUqGii4mX8LEOFDbsxSD8wgn784F4PZjw3_0
JWT_SECRET=habitflow_secret_jwt

# Run the server
npm run dev
🔗 Important Links
⚙️ Live API: https://habitflow-backend-gqzx.onrender.com
🌐 Frontend Repo: https://github.com/chash-code/habitflow-frontend
🌐 Frontend Live: https://habitflowapplication.netlify.app

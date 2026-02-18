# TaskFlow

A full-stack task management application built with React, TypeScript, Node.js, Express, and SQLite.

## Features

- User authentication (register/login) with JWT
- Create, read, update, and delete tasks
- Filter tasks by status (To Do, In Progress, Done)
- Set task priority (Low, Medium, High) and due dates
- Dashboard with task statistics
- Responsive design with Tailwind CSS

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, React Router, Axios
**Backend:** Node.js, Express, TypeScript, Prisma ORM, SQLite, JWT, bcrypt

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Backend Setup
```bash
cd server
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5173` with the API at `http://localhost:3001`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login |
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

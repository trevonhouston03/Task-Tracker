# Task Tracker Application

A simple, modern task management application built with React and Node.js. This project demonstrates a full-stack web application with a RESTful API backend and a responsive React frontend.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Real-time task counter
- ✅ Responsive design
- ✅ Persistent data during session

## Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- Modern CSS3

**Backend:**
- Node.js
- Express.js
- CORS enabled

**Containerization:**
- Docker & Docker Compose
- Multi-container setup

## Prerequisites

Before running this application, make sure you have installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [Docker Compose](https://docs.docker.com/compose/) (optional, for containerized deployment)

## Getting Started

### Option 1: Run Locally (Development Mode)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd task-tracker
    ```
2. Start the Backend
    ```bash
    cd backend
    npm install
    npm run dev
    ```
    The backend API will start on http://localhost:5000
3. Start the Frontend (in a new terminal)
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend will start on http://localhost:3000
4. Open your browser. Navigate to http://localhost:3000 to use the application.

### Option 2: Run with Docker Compose

1. Clone the repository
    ```bash
    git clone <your-repo-url>
    cd task-tracker
    ```
2. Build and start the containers
    ```bash
    docker-compose up --build
    ```
3. Open your browser. Navigate to http://localhost:3000 to use the application
4. To stop the containers:
    ```bash
    docker-compose down
    ```

## Project Structure
```bash
task-tracker/
├── backend/                 # Node.js/Express API
│   ├── app.js              # Main server file
│   ├── package.json        # Backend dependencies
│   └── Dockerfile          # Backend container config
├── frontend/               # React application
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Styles
│   ├── package.json        # Frontend dependencies
│   └── Dockerfile          # Frontend container config
└── docker-compose.yml      # Multi-container orchestration
```

## API Endpoints
The backend provides the following REST API endpoints:
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Toggle task completion status
- `DELETE /api/tasks/:id` - Delete a task

## Development Notes
- The backend runs on port 5000
- The frontend development server runs on port 3000
- The frontend is configured to proxy API requests to the backend
- Task data is stored in memory (resets when server restarts)
- CORS is enabled for cross-origin requests during development
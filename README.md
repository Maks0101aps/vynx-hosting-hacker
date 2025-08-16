# VYNX Hosting - MVP Website

A hacker-themed MVP website for VYNX Hosting Company built with React, NestJS, Bootstrap, and CouchDB.

## Features

- Hacker-themed UI with animated text effects
- Responsive design with mobile navigation
- Services showcase
- Contact form
- Dockerized deployment
- CouchDB integration

## Tech Stack

- **Frontend**: React, Bootstrap, CSS3 Animations
- **Backend**: NestJS (Node.js)
- **Database**: CouchDB
- **Deployment**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vynx-hosting
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Development

1. Start CouchDB using Docker:
   ```bash
   docker-compose up -d couchdb
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run start:dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

### Docker Deployment

To run the entire application with Docker:

```bash
docker-compose up
```

This will start:
- CouchDB on port 5984
- Frontend on port 3000
- Backend on port 3001

## Project Structure

```
vynx-hosting/
├── frontend/          # React frontend application
│   ├── public/        # Static assets
│   ├── src/           # React components and styles
│   ├── Dockerfile     # Frontend Docker configuration
│   └── nginx.conf     # Nginx configuration
├── backend/           # NestJS backend application
│   ├── src/           # Controllers, services, and modules
│   ├── Dockerfile     # Backend Docker configuration
│   └── .env           # Environment variables
├── docker-compose.yml # Docker Compose configuration
└── README.md          # This file
```

## API Endpoints

- `GET /api/services` - Get hosting services
- `GET /api/stats` - Get company statistics
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
COUCHDB_URL=http://localhost:5984
COUCHDB_NAME=vynx_hosting
COUCHDB_USER=admin
COUCHDB_PASSWORD=password
PORT=3001
NODE_ENV=development
```

## License

This project is proprietary to VYNX Hosting.

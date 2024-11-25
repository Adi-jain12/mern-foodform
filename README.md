# Multi-Step Food Form Web App

## Overview

A full-stack food form app with a React frontend and Node.js backend aimed to help user pre-order
food from restaurants.

## Features

- **Multi-step Form**: Data collection process for food-related inputs.
- **Modern UI Design**: Visually appealing and user-friendly interface.
- **Persistent Data Storage**: Robust storage using MongoDB for backend data and Redux for state management.

## Project Structure

- `client/`: Contains the frontend built with React.
- `server/`: Contains the backend API built with Node.js and Mongodb for Database.

## Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB database set up

### Environment Variables

Create a `.env` file in the `server` folder with the following variables:

- MONGODB_CONNECTION_STRING = <your-mongodb-connection-string>

### Setting up the Server

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm run dev
   ```

### Setting up the Client

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- Frontend: React, Tailwind CSS, Redux
- Backend: Node.js, Express
- Database: MongoDB

## Troubleshooting

- If the client fails to start, ensure you’re in the correct folder (`client/`) and that all dependencies are installed.
- Check if MongoDB is running locally or the connection string is correct in the `.env` file.

# &#x20;AI Chat Assistant

A full-stack AI Chat Assistant built using React, Node.js, Express.js, MongoDB, and the OpenRouter API. It allows users to authenticate securely and interact with AI through a chat interface.

## &#x20;Features

- User Authentication (Signup & Login)
- &#x20;JWT Authentication using HTTP-only Cookies
- &#x20;AI-powered Conversations
- &#x20;Chat History Management
- &#x20;User Profile Management
- &#x20;Protected Routes
- &#x20;REST API Integration
- &#x20;Full-Stack Deployment

## 🛠️ Tech Stack

**Frontend**

- React
- JavaScript
- Axios
- Tailwind

**Backend**

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt
- Cookie Parser

**Database**

- MongoDB
- Mongoose

**AI Integration**

- OpenRouter API

**Deployment**

- Vercel (Frontend)
- Render (Backend)

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Subha2301/AI-Chat-Assistant.git
cd AI-Chat-Assistant
```

### 2. Install Dependencies

Install frontend and backend dependencies in their respective directories.

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
TOKEN_LIMIT=10000
TOKEN_WINDOW_SECONDS=18000
```

Add any other environment variables required by your project.

**Important:** Never commit your `.env` file or expose API keys and secrets on GitHub.

### 4. Run the Application

Start the backend and frontend separately using the appropriate npm scripts in their respective directories.

##  What I Learned

- Building full-stack applications with React and Node.js
- Designing REST APIs with Express.js
- Implementing JWT-based authentication
- Working with MongoDB and Mongoose
- Integrating AI APIs into a web application
- Deploying frontend and backend separately



# NoteApp - A Full-Stack Notes Management Application

A modern, full-stack MERN application for creating, reading, updating, and deleting notes with rate limiting and a beautiful UI.

**Live Demo:** [https://noteapp-9qt6.onrender.com/](https://noteapp-9qt6.onrender.com/)

## 🚀 Features

- ✨ **Create, Read, Update, Delete (CRUD)** - Full note management functionality
- 🔐 **Rate Limiting** - Protect your API with Upstash rate limiting (100 requests per 60 seconds)
- 🎨 **Beautiful UI** - Responsive design with TailwindCSS and DaisyUI
- ⚡ **Fast Frontend** - Built with Vite and React 19
- 🗂️ **Auto-sorting** - Notes sorted by newest first
- 🛡️ **CORS Support** - Secure cross-origin resource sharing
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Upstash Redis** - Rate limiting
- **Dotenv** - Environment variables
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development server

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** database (local or cloud like MongoDB Atlas)
- **Upstash Redis** account for rate limiting
- A **Git** repository (optional, for version control)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AkashDavidKumar/NoteApp.git
cd NoteApp
```

### 2. Setup Environment Variables

Create a `.env` file in the **backend** directory with the following variables:

```bash
cd backend
```

Copy the `.env.example` to `.env`:

```bash
cp .env.example .env
```

Fill in your environment variables:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Upstash Redis
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Server Configuration
PORT=5001
NODE_ENV=development
```

> **Note:** When deploying to Render, set `NODE_ENV=production` in the render environment variables.

### 3. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 4. Run the Application

**Development Mode:**

Backend (from `backend` directory):
```bash
npm run dev
```

Frontend (from `frontend` directory, in a new terminal):
```bash
npm run dev
```

The backend will run on `http://localhost:5001` and frontend on `http://localhost:5173`

**Production Build:**

```bash
npm run build
npm start
```

## 📚 API Endpoints

All endpoints are prefixed with `/api/notes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all notes |
| GET | `/:id` | Get a specific note by ID |
| POST | `/` | Create a new note |
| PUT | `/:id` | Update a note |
| DELETE | `/:id` | Delete a note |

### Example Requests

**Get All Notes:**
```bash
curl -X GET http://localhost:5001/api/notes
```

**Create a Note:**
```bash
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Note content here"}'
```

**Update a Note:**
```bash
curl -X PUT http://localhost:5001/api/notes/:id \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

**Delete a Note:**
```bash
curl -X DELETE http://localhost:5001/api/notes/:id
```

## 🚀 Deployment on Render

### Frontend Deployment

1. Push your app to GitHub
2. Go to [Render](https://render.com)
3. Create a new **Static Site**
4. Connect your GitHub repository
5. Set Build Command: `npm install && npm run build --prefix frontend`
6. Set Publish Directory: `frontend/dist`

### Backend Deployment

1. Create a new **Web Service** on Render
2. Connect your GitHub repository
3. Set the following environment variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `UPSTASH_REDIS_REST_URL` - Upstash Redis URL
   - `UPSTASH_REDIS_REST_TOKEN` - Upstash Redis token
   - `NODE_ENV` - Set to `production`
4. Build Command: `npm install --prefix backend`
5. Start Command: `npm start --prefix backend`

### Environment Setup for Render

Create your MongoDB Atlas cluster and Upstash Redis instance:

1. **MongoDB Atlas**: Create a free tier cluster and get your connection string
2. **Upstash Redis**: Create a Redis database and copy REST API credentials

## 📁 Project Structure

```
NoteApp/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   ├── env.js         # Environment setup
│   │   │   └── upstash.js    # Rate limiter config
│   │   ├── controllers/
│   │   │   └── notesControllers.js  # Business logic
│   │   ├── middleware/
│   │   │   └── rateLimiter.js  # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js        # MongoDB schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js # API routes
│   │   └── server.js          # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/            # Page components
│   │   ├── lib/              # Utilities & config
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # TailwindCSS config
│   ├── postcss.config.js     # PostCSS config
│   └── package.json
├── package.json              # Root package.json
├── .env.example              # Environment variables example
└── README.md                 # This file
```

## 🔒 Rate Limiting

The API is protected with rate limiting via Upstash Redis:
- **Limit:** 100 requests per 60 seconds
- **Response:** 429 (Too Many Requests) when exceeded

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure `MONGODB_URI` is correctly set
- Check your MongoDB Atlas IP whitelist
- Verify database user credentials

### Upstash Rate Limiter Not Working
- Ensure `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are correct
- Check Upstash dashboard for active connections

### CORS Issues
- In development, CORS is configured for `http://localhost:5173`
- In production, CORS is disabled (frontend and backend on same domain)

### Frontend Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

## 📝 License

This project is licensed under the **ISC License**.

## 👨‍💻 Author

**AkashDavidKumar**

- GitHub: [https://github.com/AkashDavidKumar](https://github.com/AkashDavidKumar)
- Repository: [https://github.com/AkashDavidKumar/NoteApp](https://github.com/AkashDavidKumar/NoteApp)

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Create an issue on [GitHub Issues](https://github.com/AkashDavidKumar/NoteApp/issues)
3. Review the [official documentation](https://render.com/docs)

## 🙏 Acknowledgments

- [Render](https://render.com) - Hosting platform
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database
- [Upstash](https://upstash.com) - Redis hosting and rate limiting
- [TailwindCSS](https://tailwindcss.com) - Styling framework
- [React](https://react.dev) - UI library

---

Made with ❤️ by AkashDavidKumar

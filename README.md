# COMP229 W2022 Midterm - MovieDex Project

A full-stack web application for managing movies built with Node.js, Express.js, MongoDB, and EJS templating.

## Features

- **Movie CRUD Operations**: Create, Read, Update, Delete movies
- **Responsive Design**: Bootstrap-powered UI with mobile support
- **Database Integration**: MongoDB Atlas cloud database
- **Error Handling**: Comprehensive error management
- **RESTful API**: Clean URL structure and HTTP methods

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Frontend**: EJS, Bootstrap 5, jQuery
- **Styling**: CSS3, FontAwesome icons

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd COMP229002-W2022-Midterm-301220141
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your MongoDB credentials:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
   PORT=3002
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   Open http://localhost:3002 in your browser

## Project Structure

```
├── config/
│   ├── app.js          # Express app configuration
│   ├── database.js     # MongoDB connection handler
│   └── db.js           # Database configuration
├── controllers/
│   ├── index.js        # Home page controller
│   └── movie.js        # Movie CRUD controllers
├── middleware/
│   └── errorHandler.js # Error handling middleware
├── models/
│   └── movie.js        # Movie data model
├── public/
│   ├── images/         # Static images
│   ├── javascripts/    # Client-side JS
│   └── stylesheets/    # CSS files
├── routes/
│   ├── index.js        # Home routes
│   └── movie.js        # Movie API routes
├── views/
│   ├── movie/          # Movie-related views
│   ├── partials/       # Reusable view components
│   ├── error.ejs       # Error page
│   └── index.ejs       # Home page
├── .env.example        # Environment template
├── package.json        # Dependencies and scripts
└── server.js           # Application entry point
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/movie` | List all movies |
| GET | `/movie/add` | Add movie form |
| POST | `/movie/add` | Create new movie |
| GET | `/movie/edit/:id` | Edit movie form |
| POST | `/movie/edit/:id` | Update movie |
| GET | `/movie/delete/:id` | Delete movie |
| GET | `/movie/details/:id` | Movie details |

## Database Schema

**Movie Model:**
```javascript
{
  title: String,
  genre: String,
  director: String,
  year: Number,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```
## Scripts

- `npm start` - Start the production server
- `npm install` - Install dependencies

## Error Handling

- **Database Connection**: Graceful fallback to demo mode
- **404 Errors**: Custom not found page
- **Server Errors**: Global error handler with logging
- **Validation**: Input validation on forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions, please open an issue on GitHub.

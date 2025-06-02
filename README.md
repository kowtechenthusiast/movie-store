# Movie Explorer and Personal Library

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://movie-store-silk.vercel.app/)

A modern web application built with **Next.js 15** and **MongoDB** backend for exploring movies and managing your personal favorite movie library.

---


## About

Movie Explorer and Personal Library is a sleek, responsive web app that allows users to search and explore movies across multiple categories such as Top Rated, Popular, Now Playing, and Upcoming. Users can create accounts to save and manage their personal favorite movies collection.

---

## Features

- **User Authentication**: Create an account, log in, and manage your personal movie library.
- **Movie Search**: Search for movies by title.
- **Sort & Filter**: Browse movies sorted by Top Rated, Popular, Now Playing, and Upcoming categories.
- **Pagination**: Navigate through large sets of movies with easy-to-use pagination.
- **Carousel Display**: Visually engaging carousel to showcase featured or trending movies.
- **Personal Library**: Save your favorite movies to a personal account stored in MongoDB.
- **Responsive Design**: Mobile-friendly and works smoothly across all device sizes.

---

## Demo

Check out the live app here:  
[https://movie-store-silk.vercel.app/](https://movie-store-silk.vercel.app/)

---

## Tech Stack

- **Frontend:** Next.js 15
- **Backend:** Node.js API routes in Next.js
- **Database:** MongoDB (for user data and favorite movies storage)
- **Deployment:** Vercel

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-explorer-personal-library.git
   cd movie-explorer-personal-library
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables:
   Create a .env.local file in the root with the following variables:
   ```bash
    MONGO_URL = your_mongodb_connection_string
    API_ACCESS_TOKEN = movie_database_access_token
    API_KEY = movie_database_api_key
    JWT_SECRET = jwt_secret_key
    NEXT_PUBLIC_API_URL = http://localhost:3000/
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open *http://localhost:3000* to see the app.

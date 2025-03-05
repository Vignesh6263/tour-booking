# Tour Booking App

## Project Overview
The **Tour Booking App** is a full-stack web application designed to enable users to browse, search, and book tours across various destinations. Built with React on the frontend and Node.js/Express on the backend, it features user authentication, tour listings, reviews, and a booking system. The application aims to provide a seamless experience for travelers to explore and book tours while allowing admins to manage tour data.

### Features
- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Tour Listings**: Browse tours with pagination, search by location, distance, and group size.
- **Tour Details**: View detailed information about each tour, including descriptions, pricing, and reviews.
- **Reviews**: Users can leave ratings and reviews for tours (one review per user per tour).
- **Booking System**: Authenticated users can book tours.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices using Reactstrap and custom CSS.

## Deployment
The application is deployed on two platforms:
- **Frontend**: Deployed on Vercel
  - **Deployed Link**: [https://tour-frontend-three.vercel.app/](https://tour-frontend-three.vercel.app/)
- **Backend**: Deployed on Render
 

## Screen Captures
Below are some screenshots showcasing the application’s key features. (Replace the placeholder links with actual links to your images hosted on GitHub or another platform like Imgur.)

- **Home Page**: ![tour-frontend-three vercel app_home (2)](https://github.com/user-attachments/assets/fa5fc2b3-fc5e-4873-b241-618506b52720)



- **Tours Page**: ![tour-frontend-three vercel app_tours_67c2ad9a601631570886efae (2)](https://github.com/user-attachments/assets/0e60908e-e1cd-41a9-b48d-8eb5b43497a0)


- **Login Page**: ![tour-frontend-three vercel app_home (3)](https://github.com/user-attachments/assets/d13aaabb-fe27-4a63-9feb-b225ed66ba3e)


- **User Register Form**: ![Uploading tour-frontend-three.vercel.app_home (4).png…]()

- 
- **About**: ![Uploading tour-frontend-three.vercel.app_home (1).png…]()



## Technologies Used
### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Reactstrap**: Bootstrap components for React.
- **React Slick**: Carousel component for testimonials.
- **Fetch**: For API requests.
- **CSS**: Custom styling with responsive design.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing tour, user, and booking data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: For password hashing.
- **CORS**: For enabling cross-origin requests.

### Deployment
- **Vercel**: Frontend deployment.
- **Render**: Backend deployment.
- **MongoDB Atlas**: Cloud-hosted database.

## Installation and Setup
Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Clone the Repository
```bash
git clone

cd repo-name


Backend Setup
Navigate to the backend directory (if applicable):
bash



cd backend
Install dependencies:
bash



npm install
Create a .env file in the backend/ directory and add the following:
env



PORT=8010
JWT_SECURITY_KEY=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_string
Start the backend server:
bash



npm start
The backend should run on http://localhost:8010.
Frontend Setup
Navigate to the frontend directory:
bash



cd frontend
Install dependencies:
bash



npm install
Create a utils/config.js file in the frontend/src/ directory and add the backend URL:
javascript



export const BASE_URL = 'http://localhost:8010/api/v1';
Start the frontend development server:
bash



npm start
The frontend should run on http://localhost:3000.
Database Setup
Ensure MongoDB is running locally or use MongoDB Atlas.
The backend will automatically connect to MongoDB using the MONGO_URI specified in .env.
Seed the database with initial tour data if needed (you can add a script or manually insert data via MongoDB Compass).
Usage
Register/Login: Create an account or log in to access booking features.
Browse Tours: Navigate to the Tours page to view all available tours.
Search Tours: Use the search bar to filter tours by city, distance, or group size.
View Details: Click on a tour to see detailed information and reviews.
Book a Tour: Authenticated users can book tours by filling out the booking form.
Leave Reviews: Users can leave one review per tour.
Deployment Instructions
Deploy Frontend on Vercel
Push the frontend directory to a GitHub repository.
Log in to Vercel and import the repository.
Configure the build settings:
Framework Preset: Create React App
Build Command: npm run build
Output Directory: build
Deploy the app. Vercel will provide a URL (e.g., https://tour-frontend-three.vercel.app/).
Deploy Backend on Render
Push the backend directory to a GitHub repository.
Log in to Render and create a new Web Service.
Connect your repository and configure:
Environment: Node
Build Command: npm install
Start Command: npm start
Environment Variables:
env



PORT=8010
JWT_SECURITY_KEY=your_jwt_secret_key
MONGO_URI=your_mongodb_connection_string
Deploy the app. Render will provide a URL (e.g., https://your-backend.onrender.com).
Update frontend/src/utils/config.js with the Render backend URL:
javascript



export const BASE_URL = 'https://your-backend.onrender.com/api/v1';
Challenges and Solutions
Image Loading Issue: Initially, tour images failed to load due to inconsistent photo paths in the database. A hybrid solution was implemented to handle both frontend (/assets/images/) and backend (/tour-images/) paths dynamically.
Deployment: Vercel and Render have different environments; ensured environment variables were set correctly and images were accessible in production.
Responsiveness: Used Reactstrap and custom CSS to make the app responsive across devices.
Future Improvements
Cloud Storage for Images: Integrate Cloudinary or AWS S3 for dynamic image uploads and storage.
Admin Dashboard: Add an admin interface to manage tours, bookings, and users.
Payment Integration: Implement Stripe or PayPal for secure payments during booking.
Enhanced Search: Add more filters (e.g., price range, dates) to the search functionality.
Performance Optimization: Lazy-load images and optimize API calls for faster loading.



bash

git add README.md
git commit -m "Add README with project details and deployment info"
git push origin main


Contact
For any inquiries or issues, please reach out:

Email: kdvijay5128@gmail.com





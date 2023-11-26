# Youtube-Subscriber-Backend-

This is a backend application for managing YouTube subscribers using MongoDB and Node.js. The application provides RESTful API endpoints for managing subscribers, including 
retrieving a list of subscribers, adding a new subscriber, and updating subscriber information.

# Deployment link:
https://backend-project-3qqx.onrender.com/

# To run on local host:
http://localhost:3000

# Installation
To run the YouTube Subscriber Backend, follow these steps:
Clone the repository:
https://github.com/adity02/Youtube-Subscriber-Backend-.git

# Install dependencies:
cd youtube-subscriber-backend npm install

# Set up environment variables:
Create a .env file in the root of the project and add the following environment variables: 
PORT=3000 
MONGODB_URI=your-mongodb-uri
Replace your-mongodb-uri with your actual MongoDB URI.

# Start the application:
npm start

The server will start running at the specified port, and you can now make requests to the API endpoints.

# API Endpoints
The following are the available API endpoints for managing subscribers:

## List of Subscribers
Endpoint: GET /subscribers
Description: Retrieves a list of all subscribers.
Response: An array of subscriber objects.
# Subscriber by ID
Endpoint: GET /subscribers/:id
Description: Retrieves a single subscriber by ID.
Response: The subscriber object with the specified ID.
# Add Subscriber
Endpoint: POST /subscribers
Description: Adds a new subscriber.
Request Body: JSON object with name and channel fields.
Response: The newly added subscriber object.

# Technologies Used
Node.js: The backend is built using Node.js, a popular JavaScript runtime.
Express.js: The application uses Express.js as the web framework for handling HTTP requests.
MongoDB: The data is stored in a MongoDB database, a popular NoSQL database.
Mongoose: Mongoose is used as an ODM (Object-Document Mapper) for interacting with MongoDB in Node.js.

# Contributing
If you would like to contribute to the YouTube Subscriber Backend, feel free to fork the repository and submit a pull request with your changes.

# License
The YouTube Subscriber Backend is open source and available under the MIT License.

This README file provides an overview of the YouTube Subscriber Backend, including installation instructions, API endpoints, technologies used, contributing guidelines,
and license information.

## YOUTUBE_SUBSCRIBERS_API DOCUMENTATION

# INTRODUCTION
Welcome to the YouTube Subscriber Backend API documentation. This API provides functionalities related to managing subscribers on YouTube channels. This document provides details about the endpoints, request and response formats, and authentication methods. 
# Base URL 
http://localhost:3000

# Authentication
This API does not require authentication for accessing the public endpoints. Simply make the required HTTP requests to start utilizing the API.

# Error Handling
In case of errors, the API will respond with appropriate error status codes and error messages. Please refer to the HTTP status codes documentation for more information.

# Endpoints
Get Subscribers (/subscribers)
Get Subscribers by Names (/subscribers/names)
Get Subscriber by ID (/subscribers/:id)

# Get Subscribers
 Description: Retrive list of all data 
Endpoint: /subscribers
Method: GET
Response:
Status Code: 200 OK
Content-Type: application/json
Example Response: 
[
    {
        "_id": "655d906ba76ca514dc9452bf",
        "name": "Jeread Krus",
        "subscribedChannel": "CNET",
        "subscribedDate": "2023-11-22T05:23:55.119Z",
        "__v": 0
    },
    {
        "_id": "655d906ba76ca514dc9452c0",
        "name": "John Doe",
        "subscribedChannel": "freeCodeCamp.org",
        "subscribedDate": "2023-11-22T05:23:55.121Z",
        "__v": 0
    },
    {
        "_id": "655d906ba76ca514dc9452c1",
        "name": "Lucifer",
        "subscribedChannel": "Sentex",
        "subscribedDate": "2023-11-22T05:23:55.122Z",
        "__v": 0
    },
    {
        "_id": "655da94ce0fabd22ec8e67f5",
        "name": "adity",
        "subscribedChannel": "adity the great",
        "subscribedDate": "2023-11-22T07:10:04.450Z",
        "__v": 0
    }
]
Endpoint-Specific Error
Error : 500 (Bad Request)
Error Message: Internal Server Error

# GET Subscribers by names
Description: Retrieve subscribers based on their name.
Endpoint: /subscribers/names 
Method: GET
Query Parameters:names (required): 
The name of the subscribers to search for.
Response:Status Code: 200 OK
Content-Type: application/json
Example Response:
[
    {
        "name": "Jeread Krus",
        "subscribedChannel": "CNET"
    },
    {
        "name": "John Doe",
        "subscribedChannel": "freeCodeCamp.org"
    },
    {
        "name": "Lucifer",
        "subscribedChannel": "Sentex"
    },
    {
        "name": "adity",
        "subscribedChannel": "adity the great"
    }
]
Endpoint-Specific 
ErrorStatus Code: 500 (Bad Request)
Message: Internal Server Error

# Get Subscriber by ID
Description: Retrieve a specific subscriber based on their ID.
Endpoint: /subscribers/:id
Method: GET
Query Parameters:id (required): The ID of the subscriber to retrieve data.
Response:Status Code: 200 OK
Content-Type: application/json
Example Response:
{
    "_id": "655d906ba76ca514dc9452bf",
    "name": "Jeread Krus",
    "subscribedChannel": "CNET",
    "subscribedDate": "2023-11-22T05:23:55.119Z",
    "__v": 0
}
Endpoint-Specific 
Error:Status Code: 400 (Bad Request)
Message: No subscriber found related to this ID.
Example Response:
{    "Error_message": "No subscriber found to this id."}


# Conclusion
This API documentation provides a comprehensive guide on how to interact with the API endpoints to retrieve subscribers information. If you have any questions or encounter any issues, please feel free to reach out.
While this documentation provides comprehensive guidance, remember that APIs can evolve. Stay connected with our updates to take advantage of new features, enhancements, and improvements.
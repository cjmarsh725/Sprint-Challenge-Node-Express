# Review Questions

## What is Node.js?
Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.
## What is Express?
Express is a package for Node that allows us to build applications and APIs and helps with routing and MVC architecture.
## Mention two parts of Express that you learned about this week.
The route handlers of express are actually middleware and using the express.json() middleware enables the parsing of request bodies.
## What is Middleware?
Middleware is a function that has 3 or 4 parameters, at least request, response, and next and optionally error. They can be used with express to add them to the Middleware queue.
## What is a Resource?
A resource is any category of data that warrants its own path.
## What can the API return to help clients know if a request was successful?
A response with a status in the 200s indicates a success in a response.
## How can we partition our application into sub-applications?
We can specify paths, usually to different resources, that each have their own set of route handlers and use express.Router to add them to the server.
## What is CORS and why do we need it?
CORS stands for cross-origin resource sharing and the npm package named cors allows us to test our api between two applications on localhost with different ports.
const express = require('express');
// Routing Servers
const projectRoutes = require('./routes/projects');
const actionRoutes = require('./routes/actions');

// Server Creation
const server = express();

// Middleware
server.use(express.json());

// Route Handling
server.get('/', (req, res) => {
  res.json({status: 'Server working'});
});
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

// Server Listening
server.listen(5000);
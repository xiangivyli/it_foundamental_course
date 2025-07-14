const app = require('./app');

const server = app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

module.exports = { app, server };

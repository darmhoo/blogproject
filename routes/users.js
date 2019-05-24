module.exports = (app) => {
  const users = require('../controllers/posts');

  app.post('/auth/authenticate', authenticate);
  app.post('/auth/register', create);
  app.get('/')

}



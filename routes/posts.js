const Roles = require('../_helpers/role');
const authorize = require('../_helpers/authorize');

module.exports = (app) => {
  const posts = require('../controllers/posts');

  app.post('/posts',authorize(Roles.Admin), posts.create);

  app.get('/posts', posts.findAll);

  app.get('/posts/:postId',authorize(), posts.findOne);

  app.put('/posts/:postId',authorize(Roles.Admin), posts.update);

  app.put('/posts/:postId', posts.delete);
}


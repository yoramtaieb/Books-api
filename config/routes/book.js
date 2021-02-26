module.exports = (express, controllers) => {
  const router = express.Router();

  router.route("/books").get(controllers.book.getAll);
  router.route("/books/:id").get(controllers.book.getById);

  return router;
};

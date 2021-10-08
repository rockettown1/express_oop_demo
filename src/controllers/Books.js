import _Controller from "../lib/Controller.js";
import { authHandler } from "../middleware/index.js";
import { lowdbService } from "../services/LowdbService.js";

export default class BooksController extends _Controller {
  path = "/api";
  routes = [
    {
      path: "/books",
      method: "GET",
      handler: this.getBooks,
      localMiddleware: [authHandler],
    },
    {
      path: "/book",
      method: "GET",
      handler: this.addBook,
      localMiddleware: [],
    },
  ];

  constructor() {
    super();
  }

  async getBooks(req, res, next) {
    res.status(200).send({ message: "You fetched all the users" });
  }

  async addBook(req, res) {
    const collection = await lowdbService.addResource("books", {
      name: req.query.name,
      author: req.query.author,
    });

    res
      .status(201)
      .send({ message: "You successfully added a book", collection });
  }
}

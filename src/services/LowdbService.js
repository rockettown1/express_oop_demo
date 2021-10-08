import { logs } from "../lib/constants/logging.js";
import { Low } from "lowdb";
import { JSONFileSync } from "lowdb";

class LowdbService {
  #adapter = new JSONFileSync("local/db.json");
  #db;

  async connect() {
    try {
      this.#db = new Low(this.#adapter);
      await this.#db.read();
      console.log(logs.db_success("lowdb"));
    } catch (error) {
      console.log(logs.db_fail("lowdb"));
    }
  }

  async createCollection(obj) {
    this.#db.data = obj;
    console.log(this.#db.data);
  }

  async addResource(collection, resource) {
    try {
      if (!this.#db.data.hasOwnProperty(collection)) {
        await this.createCollection({ [`${collection}`]: [] });
      }
      this.#db.data[collection].push(resource);
      await this.#db.write();
      return this.#db.data[collection];
    } catch (error) {
      console.log(error);
    }
  }
}

//singleton so when the connect function is first run and populates the db field, it will always be there
export const lowdbService = new LowdbService();

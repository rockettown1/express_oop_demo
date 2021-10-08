import { logs } from "../lib/constants/logging.js";

export default class MongooseService {
  async connect() {
    console.log(logs.db_success("MongoDB"));
  }
}

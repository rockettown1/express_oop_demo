import { logs } from "../lib/constants/logging.js";

class MongooseService {
  async connect() {
    console.log(logs.db_success("MongoDB"));
  }
}

export default new MongooseService();

import { logs } from "../lib/constants/logging.js";

export default class FirestoreService {
  async connect() {
    console.log(logs.db_success("Google Firestore"));
  }
}

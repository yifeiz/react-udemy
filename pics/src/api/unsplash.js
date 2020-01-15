import axios from "axios";
import password from "../password";

console.log(password());
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    // make sure password.js file exists, and has the unsplash key value returned
    Authorization: password()
  }
});

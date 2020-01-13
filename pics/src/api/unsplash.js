import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      // INSERT CLIENT KEY BELOW
      "Client-ID "
  }
});

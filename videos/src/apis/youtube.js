import axios from "axios";

const KEY = "AIzaSyBQOEXWIyhFfDnH0auh7oz8E-t8f5t0dUY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

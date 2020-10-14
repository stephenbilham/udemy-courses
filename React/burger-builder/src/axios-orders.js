import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-build-burger-34cd5.firebaseio.com/"
});

export default instance;

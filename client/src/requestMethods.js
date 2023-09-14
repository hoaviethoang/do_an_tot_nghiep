import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhkNDhkZGNlMDg3YTUzYjg1NDkzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTU5MzQ1MSwiZXhwIjoxNjYxODUyNjUxfQ.s1-a6eJ6iMO1if1tu4wOLIEmYpSFBOwkGxS_0WBfNWA"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });
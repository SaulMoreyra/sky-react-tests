import http from "axios";

const axios = http.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Token token=${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export default axios;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

export const axiosF = axios.create({
    baseURL: "https://team-1.shinhansec-pda.net",
    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
        "Authorization": "Bearer ",

        // 추가
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':"true",
    }
})
import axios from "axios";

export const movies = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const imageURL = process.env.REACT_APP_IMAGE_URL;
// movies.interceptors.request.use(function(){
//
// });

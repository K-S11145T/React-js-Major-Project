import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTQyNTE5NmEwYmE1ZmNhODIwZjBhNzRkMmMwZjExNiIsIm5iZiI6MTcyMTkwMzAzMC4yODc3MDksInN1YiI6IjY2YTIyNTBjZjdhMTE0YTA4M2UxMDAyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Q2OiP-XiEEMEoUkg4ZHTNpio1gcVvBPISagU5t997Q'
  }
})

export default instance;
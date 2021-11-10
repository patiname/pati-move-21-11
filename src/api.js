import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "127c866ecb9630df124cbd4e2522af1c",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComming: () => api.get("movie/upcoming"),
};

//현재 상영 영화
//개봉예정

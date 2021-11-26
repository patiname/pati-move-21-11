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
  topRated: () => api.get("movie/top_rated"),
  detail: (id) => api.get(`movie/${id}`),
  video: (movie_id) => api.get(`movie/${movie_id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

//현재 상영 영화
//개봉예정

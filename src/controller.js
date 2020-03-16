import { renderMovies } from "./pages/trending-movies";
import { renderMovieDetail } from "./pages/trending-movie-detail";

export default {
  moviesRoute() {
    renderMovies();
  },
  moviesdetailRoute(params) {
    let id = params;
    renderMovieDetail(id);
  }
};

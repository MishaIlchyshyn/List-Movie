import config from "../config";

class BasicDataProvider {
  async getTrendingMovies() {
    return await fetch(
      `${config.api_url}/trending/movie/day?api_key=${config.api_key}`
    ).then(response => response.json());
  }

  async getTrendingMovieById(id) {
    return await fetch(
      `${config.api_url}/movie/${id}?api_key=${config.api_key}`
    ).then(response => response.json());
  }

  async getRecommendationsMovie(id) {
    return await fetch(
      `${config.api_url}/movie/${id}/recommendations?api_key=${config.api_key}`
    ).then(response => response.json());
  }

  async getMovieDetailData(id) {
    this.getTrendingMovieById(id);
    this.getRecommendationsMovie(id);
  }

  async getSearchMovies(value) {
    return await fetch(
      `${config.api_url}/search/movie?api_key=${config.api_key}&query=${value}`
    ).then(response => response.json());
  }
}

export default new BasicDataProvider();

import config from "../config";

import BaseDataProvider from "../providers/basic-data-provider";
import basicDataProvider from "../providers/basic-data-provider";

import { renderList } from "../components/render-list";
import { search } from "../components/search";
import { backHome } from "../components/back-home";

export function renderMovieDetail(id) {
  BaseDataProvider.getTrendingMovieById(id).then(resolve => {
    let movie = resolve;

    let app = document.querySelector("#app");
    app.innerHTML = "";

    search();

    let pageContent = document.createElement("div");
    pageContent.setAttribute("id", "page-content");

    let blockAbout = document.createElement("div");
    blockAbout.setAttribute("class", "block-about");

    blockAbout.appendChild(backHome("< back to list movies"));

    let moviePoster = document.createElement("img");
    moviePoster.setAttribute(
      "src",
      `${config.base_url_poster}${movie.poster_path}`
    );
    blockAbout.appendChild(moviePoster);

    let movieName = document.createElement("h1");
    movieName.innerText = `${movie.title}`;
    blockAbout.appendChild(movieName);

    let movieAbout = document.createElement("p");
    movieAbout.innerText = `${movie.overview}`;
    blockAbout.appendChild(movieAbout);

    pageContent.appendChild(blockAbout);
    app.appendChild(pageContent);
  });

  basicDataProvider.getRecommendationsMovie(id).then(resolve => {
    let recomendations = resolve.results;

    let app = document.querySelector("#app");

    let pageContent = document.querySelector("#page-content");

    let recomendationsBlock = document.createElement("div");
    recomendationsBlock.setAttribute("id", "recomendations-block");

    let h3 = document.createElement("h3");
    h3.innerText = "Recomendations";
    recomendationsBlock.appendChild(h3);

    recomendationsBlock.appendChild(renderList(recomendations));

    pageContent.appendChild(recomendationsBlock);
    app.appendChild(pageContent);
  });
}

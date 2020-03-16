import BasicDataProvider from "../providers/basic-data-provider";

import { renderList } from "../components/render-list";
import { search } from "../components/search";

export function renderMovies() {
  BasicDataProvider.getTrendingMovies().then(resolve => {
    let movies = resolve.results;

    search();

    let pageContent = document.createElement("div");
    pageContent.setAttribute("id", "page-content");
    pageContent.appendChild(renderList(movies));

    let app = document.querySelector("#app");
    app.appendChild(pageContent);
  });
}

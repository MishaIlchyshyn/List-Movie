import BasicDataProvider from "../providers/basic-data-provider";

import { renderList } from "../components/render-list";
import { backHome } from "../components/back-home";

export function search() {
  let searchBlock = document.createElement("div");

  let input = document.createElement("input");
  input.setAttribute("placeholder", "name movie");
  input.setAttribute("value", "");
  searchBlock.appendChild(input);

  let button = document.createElement("button");
  button.innerHTML = "Search";

  button.onclick = function getInputValue() {
    let inputValue = input.value;

    BasicDataProvider.getSearchMovies(inputValue).then(resolve => {
      let searchMovies = resolve.results;

      let pageContent = document.querySelector("#page-content");
      pageContent.innerHTML = "";
      if (inputValue === "") {
        pageContent.innerHTML = "<h2>There are no movies by default</h2>";

        pageContent.appendChild(backHome("< Back to home"));
      } else {
        pageContent.appendChild(renderList(searchMovies));
      }
    });
  };
  searchBlock.appendChild(button);

  let app = document.querySelector("#app");
  app.appendChild(searchBlock);
}

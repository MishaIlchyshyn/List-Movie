export function renderList(data) {
  let ul = document.createElement("ul");

  for (let movie of data) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#moviesdetail/${movie.id}`;
    li.appendChild(a);
    a.innerText = `${movie.title}`;
    ul.appendChild(li);
  }

  return ul;
}

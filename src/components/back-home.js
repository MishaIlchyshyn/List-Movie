export function backHome(text) {
  let back = document.createElement("a");

  back.setAttribute("class", "btn-back");

  back.innerText = `${text}`;
  back.href = "#";
  back.onclick = function() {
    window.location.hash = "";
    back.href = window.location.pathname;
  };

  return back;
}

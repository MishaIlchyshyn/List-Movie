import Controller from "./controller.js";

function getRouteInfo() {
  const hash = window.location.hash ? window.location.hash.slice(1) : "";
  const [name, id] = hash.split("/");

  return { name, params: { id } };
}

function handleHash() {
  const { name, params } = getRouteInfo();

  if (name) {
    const routeName = name + "Route";
    Controller[routeName](params.id);
  }
}

export default {
  init() {
    window.addEventListener("hashchange", handleHash);
    handleHash();
    if (window.location.pathname === "/") {
      Controller.moviesRoute();
    }
  }
};

import view404 from "../views/404.html";

export default () => {
  const viewElement = document.createElement("div");
  viewElement.innerHTML = view404;
  viewElement.classList.add("container", "mt-4");

  return viewElement;
};

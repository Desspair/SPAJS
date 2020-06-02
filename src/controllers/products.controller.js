import viewProducts from "../views/products.html";

export default () => {
  const viewElement = document.createElement("div");
  viewElement.innerHTML = viewProducts;
  viewElement.classList.add("container", "mt-4");

  return viewElement;
};

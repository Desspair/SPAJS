import viewHome from "../views/home.html";

export default () => {
  const viewElement = document.createElement("div");
  viewElement.innerHTML = viewHome;
  viewElement.classList.add("container", "mt-4");

  const btnClick = viewElement.querySelector("#btnClick");

  btnClick.addEventListener("click", () => {
    console.log("Me diste Click y Estoy siendo llamado desde la views");
  });

  return viewElement;
};

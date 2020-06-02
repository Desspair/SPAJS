import Home from "../controllers/home.controller";
import { pages } from "../controllers/index";

const templateHtml = document.getElementById("template");

const router = async (route) => {
  templateHtml.innerHTML = "";
  switch (route) {
    case "#/": {
      console.log("Estas en el Home");

      return templateHtml.appendChild(Home());
    }
    case "#/products":
      console.log("Estas en products");

      return templateHtml.appendChild(pages.products());
      break;
    case "#/post":
      console.log("Estas en post");

      return templateHtml.appendChild(await pages.posts());
      break;
    default:
      console.log("Estas perdido !");
      return templateHtml.appendChild(pages.notFound());
  }
};

export { router };

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

import { router } from "./router/index.routes.js";

router(window.location.hash);

window.addEventListener("hashchange", () => {
  let hash = window.location.hash;
  router(hash);
});

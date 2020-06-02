import homeController from "./home.controller";
import postsController from "./posts.controller";
import productsController from "./products.controller";
import notFound from "./404.controlller";

const pages = {
  home: homeController,
  posts: postsController,
  products: productsController,
  notFound: notFound,
};

export { pages };

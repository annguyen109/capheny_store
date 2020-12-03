import Index from "./pages/home/index";
import Admin from "./pages/admin/admin";

import Detail from "./pages/home/detail/index";
import Product from "./pages/home/product/index";



const routesHome = [
  {
    path: "/",
    exact: true,
    component: Index
  },
  {
    path: "/product",
    exact: false,
    component: Product
  },
  {
    path: "/product/:id",
    exact: false,
    component: Product
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail
  }


];

const routesAdmin = [
  {
    path: "/dashboard",
    exact: false,
    component: Admin
  },
];

export { routesHome, routesAdmin };

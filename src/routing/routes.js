import React from "react";
import Detail from "../pages/Detail";
import Homepage from "../pages/Homepage";
import Keranjang from "../pages/Keranjang";
import PageExample from "../pages/PageExample";

const pagesRoutes = [
  {
    name: "homepage",
    link: "/",
    component: Homepage,
  },
  {
    name: "detail",
    link: "/detail",
    component: Detail,
  },
  {
    name: "Keranjang",
    link: "/keranjang",
    component: Keranjang,
  },
  {
    name: "pageExample",
    link: "/page",
    component: PageExample,
  },
];
export default pagesRoutes;

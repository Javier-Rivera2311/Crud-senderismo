import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const Sendero = Loadable(lazy(() => import("../pages/sendero/sendero")));
<Sendero path="/Routes" component={Sendero} />

const Publish = Loadable(lazy(() => import("../pages/PublishRoutes/Publicar")));
<Publish path="/PublishRoutes" component={Publish} />
/* ****Routes***** */

const Login = Loadable(lazy(() => import("../pages/log/login")));
<Login path="/Login" component={Login} />

const AboutUs = Loadable(lazy(() => import("../pages/AboutUs/ABOUT_US")));
<AboutUs path="/AboutUs" component={AboutUs} />

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      {path: "Routes",exact: true, element: <Sendero/>},
      {path: "Publish routes",exact: true, element: <Publish/>},
      {path: "Login",exact: true, element: <Login/>},
      {path: "ABOUT US",exact: true, element: <AboutUs/>},



    ],
  },
];

export default Router;
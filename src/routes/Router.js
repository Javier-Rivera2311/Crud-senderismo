import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);
const LoginLayout = Loadable(
  lazy(() => import("../layouts/login-layout/LoginLayout"))
);


/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

const Sendero = Loadable(lazy(() => import("../pages/sendero/sendero")));
<Sendero path="/Routes" component={Sendero} />

const Publish = Loadable(lazy(() => import("../pages/PublishRoutes/Publicar")));
<Publish path="/PublishRoutes" component={Publish} />

const Profile = Loadable(lazy(() => import("../pages/Profile/Profile")));
<Profile path="/Profile" component={Profile} />
/* ****Routes***** */

const Login = Loadable(lazy(() => import("../pages/log/Login")));
<Login path="/Account" component={Login} />

const AboutUs = Loadable(lazy(() => import("../pages/AboutUs/ABOUT_US")));
<AboutUs path="/AboutUs" component={AboutUs} />

const Register = Loadable(lazy(() => import("../pages/log/Register")));
<Register path="/Register" component={Register} />

const NewPassword = Loadable(lazy(() => import("../pages/log/NewPassword")));
<NewPassword path="/NewPassword" component={NewPassword} />

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
      {path: "ABOUT US",exact: true, element: <AboutUs/>},
      {path: "Profile",exact: true, element: <Profile/>},
      {path: "Sign in",exact: true, element: <Login hideHeaderFooter={true}/>},
      {path: "Logout",exact: true, element: <Login/>},



    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      { path: "", exact: true, element: <Navigate to="/auth/Login" /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      {path: "Login",exact: true, element: <Login/>},
      {path: "Register",exact: true, element: <Register/>},
      {path: "NewPassword",exact: true, element: <NewPassword/>},
      



    ],
  },
];

export default Router;
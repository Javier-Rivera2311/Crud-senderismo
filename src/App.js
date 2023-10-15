import React from "react";
import { useRoutes } from "react-router";
import Router from "./routes/Router";
import LoginForm from "./pages/log/login";

function App() {
  const routing = useRoutes(Router);
  return (
    <React.Fragment>
      {routing}
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './scss/main.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";



import PageNotFound from "./pages/page-not-found";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";

const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showMenuAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <div>
         <Switch>

         {showMenuHome(routesHome)}
          {showMenuAdmin(routesAdmin)}

         <Route path="" component={PageNotFound} />

         </Switch>
       </div>
     </BrowserRouter>
    </div>
  );
}

export default App;

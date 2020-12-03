import React from "react";
import { Route } from "react-router-dom";
import Header from "./../pages/header";
import Footer from "./../pages/footer";

const HomeLayout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
          <Footer />
        </HomeLayout>

  


        

      )}
    />
  );
}

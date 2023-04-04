import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="text-center text-4xl text-red-600 font-bold">
        {navigation.state === "loading" ? "Loading..." : ""}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

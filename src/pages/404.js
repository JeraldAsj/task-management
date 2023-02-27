import React from "react";
import { SideBar } from "../layouts/SideBar";
import { Div } from "../components/basicsComponents";
import { colors } from "../utilities/Colors";
const NotFound = () => {
  return (
    <>
      <Div className={"row vh-100"}>
        <SideBar />
        <Div
          style={{ background: colors.secondery }}
          className={"col-9 d-flex align-items-center justify-content-center"}
        >
          <img src={require("../assets/404page.jpg")} height={400} />
        </Div>
      </Div>
    </>
  );
};

export default NotFound;

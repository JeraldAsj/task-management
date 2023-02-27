import React from "react";
import { SideBar } from "../layouts/SideBar";
import { Div } from "../components/basicsComponents";
import { colors } from "../utilities/Colors";
import commingSoon from "../assets/commingSoon.svg";
const CommingSoon = () => {
  return (
    <>
      <Div className={"row vh-100"}>
        <SideBar />
        <Div
          style={{ background: colors.secondery, flexDirection: "column" }}
          className={
            "col-9 d-flex align-items-center justify-content-center flex-direction-column"
          }
        >
          <img src={commingSoon} height={300} width={300} />
          <h1>Coming soon!</h1>
        </Div>
      </Div>
    </>
  );
};

export default CommingSoon;

import React, { useState } from "react";
import { colors } from "../../../utilities/Colors";
import { Div, Text, Image } from "../../basicsComponents";
import { GrSearch } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import { BiBorderOuter } from "react-icons/bi";
import { FaBorderStyle } from "react-icons/fa";
import "./TitleCard.css";
import User from "../../modal/user";
const TitleCard = ({ user, setuser }) => {
  const [modalShow, setModalShow] = useState(false);
  console.log(user, "user");
  console.log(modalShow, "modalShow");
  return (
    <Div className={"bg-white px-4 py-3 border-rad mt-4 mx-3"}>
      <Div className={"d-flex align-items-center justify-content-between"}>
        <Div>
          <Text as={"h2"} label="Weekly Sprint #4" />
          <Div className={"d-flex align-items-center"}>
            <Div>
              {user?.map((item) => {
                return (
                  <Image className={"rounded-circle img"} src={item.profile} />
                );
              })}
            </Div>
            <Div
              style={{ background: colors.lightPink, cursor: "pointer" }}
              className={
                "d-flex align-items-center justify-content-evenly border-rad ms-4 p-2"
              }
              onClick={() => setModalShow(true)}
            >
              <Text
                style={{
                  color: colors.drakPink,
                  fontSize: "1.5em",
                }}
                as={"p"}
                className={"mb-0"}
                label="+"
              />
              <Text
                style={{
                  color: colors.drakPink,
                  fontSize: "1em",
                }}
                as={"p"}
                className={"mb-0 ps-2"}
                label="Invite People"
              />
            </Div>
          </Div>
        </Div>

        <Div
          className={"d-flex align-items-end justify-content-between flex-dar"}
        >
          <Text
            as={"p"}
            className="mb-0"
            style={{ color: colors.gray }}
            label="Date Created"
          />
          <Text as={"p"} className="mb-0" label="27 October 2020, 4:15 pm" />
          <Div className={"d-flex align-items-center justify-content-between"}>
            <GrSearch color="#BCC6CC" />
            <CiFilter color="#BCC6CC" />
            <Text as={"p"} className="mb-0" label="|" />
            <BiBorderOuter color="#BCC6CC" />
            <FaBorderStyle color="#BCC6CC" />
          </Div>
        </Div>
      </Div>
      <User
        show={modalShow}
        onHide={() => setModalShow(false)}
        setuser={setuser}
        user={user}
        setModalShow={setModalShow}
      />
    </Div>
  );
};

export default TitleCard;

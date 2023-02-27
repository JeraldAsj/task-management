import React, { useState } from "react";
import { Div, Text, Image } from "../../basicsComponents";
import { GrAttachment } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { users } from "../../../utilities/Constants";
import { colors } from "../../../utilities/Colors";
import "./TicketCard.css";
import EditTask from "../../modal/editTask";
const TicketCard = ({ item, user, editTask }) => {
  const [modalShow, setModalShow] = useState(false);
  console.log(item, "item");
  return (
    <>
      <Div
        key={item.id}
        className={"bg-white px-3 py-2 border-rad mt-3"}
        onClick={() => setModalShow(true)}
      >
        <Text
          as={"p"}
          className="mb-0 "
          style={{ color: item.categories.color }}
          label={item.categories.name}
        />
        <Text as={"p"} label={item.name} />
        <Div className={"row"}>
          <Div className={"col-5 d-flex align-items-center"}>
            <GrAttachment color="#BCC6CC" />
            <Text
              as={"p"}
              style={{ color: colors.gray }}
              className="mb-0 ps-2"
              label={item.file?.length}
            />
          </Div>
          <Div className={"col-7 d-flex align-items-center"}>
            <FaRegCommentDots color="#BCC6CC" />
            <Text
              as={"p"}
              style={{ color: colors.gray }}
              className="mb-0 ps-2"
              label={item.comment?.length}
            />
          </Div>
        </Div>
        <Div
          className={"d-flex align-items-center justify-content-between mt-3"}
        >
          <Div>
            {item.assine?.map((item) => {
              return (
                <Image className={"rounded-circle img"} src={item.profile} />
              );
            })}
          </Div>
          <Div
            style={{
              background: colors.lightPink,
              cursor: "pointer",
              height: "20px",
              width: "20px",
            }}
            className={
              "d-flex align-items-center justify-content-evenly border-rad ms-4 p-3"
            }
          >
            <Text
              style={{
                color: colors.drakPink,
                fontSize: "18px",
              }}
              as={"p"}
              className={"mb-0"}
              label={item.dueDateCount}
            />
          </Div>
        </Div>
      </Div>
      <EditTask
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item}
        user={user}
        editTask={editTask}
      />
    </>
  );
};

export default TicketCard;

import React, { useState } from "react";
import { Div, Text } from "../../basicsComponents";
import { BsThreeDots } from "react-icons/bs";
import TicketCard from "../TicketCard";
import { colors } from "../../../utilities/Colors";
import Task from "../../modal/task";

const StatusCard = ({ item, user, tasks, addTask, editTask }) => {
  const { name, color } = item;
  const [modalShow, setModalShow] = useState(false);

  return (
    <Div className={"col-3 "}>
      <Div className={" d-flex align-items-center justify-content-between"}>
        <Text as={"h6"} label={name} style={{ color: color }} />
        <BsThreeDots />
      </Div>
      {tasks?.map((item) => {
        return (
          <>
            {console.log(1)}
            {name == item.status && (
              <TicketCard item={item} user={user} editTask={editTask} />
            )}
          </>
        );
      })}

      {name == "Backlog" && (
        <Div
          style={{ background: colors.lightPink, cursor: "pointer" }}
          className={
            "d-flex align-items-center justify-content-evenly border-rad  mt-3 p-2"
          }
          // onClick={() => alert("true")}
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
            className={"mb-0 "}
            label="Add New Task"
          />
        </Div>
      )}
      <Task
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
        addTask={addTask}
      />
    </Div>
  );
};

export default StatusCard;

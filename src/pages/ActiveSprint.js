import React, { useState } from "react";
import { SideBar } from "../layouts/SideBar";
import { Div } from "../components/basicsComponents";
import { colors } from "../utilities/Colors";
import TitleCard from "../components/custom/TitleCard";
import { users, status, task } from "../utilities/Constants";
import StatusCard from "../components/custom/StatusCard";

const ActiveSprint = () => {
  const [user, setuser] = useState(users);
  const [tasks, settasks] = useState(task);

  const addTask = (task) => {
    let newTask = [...tasks];
    newTask.push({ ...task, id: tasks.length + 1 });
    settasks(newTask);
  };
  const editTask = (task) => {
    let newList = tasks.map((item) => {
      if (item.id == task.id) {
        return task;
      } else return item;
    });
    settasks(newList);
  };
  console.log(tasks, "taskstasks");
  return (
    <>
      <Div className={"row vh-100"}>
        <SideBar />
        <Div style={{ background: colors.secondery }} className={"col-9"}>
          <TitleCard user={user} setuser={setuser} />
          <Div className={"row  mt-4 mx-3"}>
            {status.map((item) => {
              return (
                <StatusCard
                  item={item}
                  user={user}
                  tasks={tasks}
                  addTask={addTask}
                  editTask={editTask}
                />
              );
            })}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default ActiveSprint;

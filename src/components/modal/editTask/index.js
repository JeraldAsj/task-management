import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Div, Image, Text } from "../../basicsComponents";
import "./EditTask.css";
import { FaTrash } from "react-icons/fa";
import { categories, status } from "../../../utilities/Constants";
import Alert from "react-bootstrap/Alert";

const EditTask = (props) => {
  const { item, user, onHide, editTask } = props;
  const [task, setTask] = useState(item);
  console.log(task, "task");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(false);
  }, 10000);
  const removeFile = (file) => {
    let newFile = task.file.filter((_, index) => index != file);
    setTask({ ...task, file: newFile });
  };
  const handleFileInputChange = (e) => {
    let attachiment = [...task.file];
    const files = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(files);

    reader.onload = () => {
      attachiment.push(reader.result);
      setTask({ ...task, file: attachiment });
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const addComment = () => {
    if (comment) {
      let oldcmt = [...task.comment];
      oldcmt.push(comment);
      setTask({ ...task, comment: oldcmt });
      setComment("");
    }
  };

  const handleCalculate = () => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const start = new Date();
    const end = new Date(task.dueDate);
    const diffInDays = Math.round(Math.abs((start - end) / oneDay));
    setTask({ ...task, dueDateCount: diffInDays });
  };
  let addNew = () => {
    if (
      !task.name ||
      !task.status ||
      !task.dueDate ||
      !task.dueDateCount ||
      !task.categories.name ||
      task.file.length == 0 ||
      task.assine.length == 0
    ) {
      setShow(true);
    } else {
      editTask(task);
      setTask({
        name: "",
        status: "Backlog",
        categories: {},
        file: [],
        assine: [],
        comment: [],
        dueDate: "",
        dueDateCount: 0,
      });
      onHide();
    }
  };
  useEffect(() => {
    handleCalculate();
  }, [task.dueDate]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && <Alert variant={"danger"}>Kindly fill all filed</Alert>}

        <Div className={"row"}>
          <Div className={"col-8 "}>
            <Div className={"d-flex flex-direction-column "}>
              {task.file?.map((item, index) => {
                return (
                  <Div className={"position-relative"}>
                    <Image src={item} class=" rounded-circle imgs" alt="" />
                    <FaTrash
                      color="red"
                      className="position-absolute align"
                      onClick={() => removeFile(index)}
                    />
                  </Div>
                );
              })}
              <Div class="mb-3 ms-4 w-50">
                <Text
                  as={"label"}
                  className="form-label"
                  label={"Attachiment"}
                />

                <input
                  type="file"
                  class="form-control"
                  name=""
                  id=""
                  placeholder=""
                  aria-describedby="fileHelpId"
                  onChange={handleFileInputChange}
                />
              </Div>
            </Div>
            <Div class="mb-3 ">
              <Text
                as={"label"}
                className="form-label d-flex flex-direction-column"
                label={"Comments"}
              />
              {task.comment?.map((item) => {
                return (
                  <Text
                    as={"p"}
                    className="form-label d-flex flex-direction-column"
                    label={item}
                  />
                );
              })}
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                className="form-label"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </Div>
            <Div class="my-3 ">
              <input
                type="button"
                class=" bg-primary text-white border-non p-2"
                name=""
                id=""
                value="Submit Comment"
                onClick={addComment}
              />
            </Div>
          </Div>
          <Div className={"col-4"}>
            <Div class="mb-3 ">
              <Text as={"label"} className="form-label" label={"Task name"} />

              <input
                type="text"
                class="form-control"
                name=""
                id=""
                placeholder="Name"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
              />
            </Div>
            <Div class="mb-3">
              <label for="" class="form-label">
                Status
              </label>
              <select
                class="form-select form-select-lg"
                name=""
                id=""
                value={task.status}
                onChange={(e) => setTask({ ...task, status: e.target.value })}
              >
                <option hidden>Select Status</option>
                {status?.map((item) => {
                  return (
                    <option
                      data-name={item.name}
                      value={item.name}
                      data-color={item.color}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </Div>
            <div class="mb-3">
              <label for="" class="form-label">
                Category
              </label>
              <select
                class="form-select form-select-lg"
                name="category"
                id=""
                value={task.categories.name}
                onChange={(e) =>
                  setTask({
                    ...task,
                    categories: {
                      name: e.target.options[e.target.selectedIndex].dataset
                        .name,
                      color:
                        e.target.options[e.target.selectedIndex].dataset.color,
                    },
                  })
                }
              >
                <option hidden>Select Category</option>
                {categories?.map((item) => {
                  return (
                    <option
                      data-name={item.name}
                      value={item.name}
                      data-color={item.color}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <Div class="mb-3">
              <label for="" class="form-label">
                Assignee
              </label>
              <select
                class="form-select form-select-lg"
                name=""
                id=""
                value={task.assine.length > 0 && task.assine[0].name}
                onChange={(e) =>
                  setTask({
                    ...task,
                    assine: [
                      {
                        name: e.target.options[e.target.selectedIndex].dataset
                          .name,
                        mail: e.target.options[e.target.selectedIndex].dataset
                          .mail,
                        profile:
                          e.target.options[e.target.selectedIndex].dataset
                            .profile,
                      },
                    ],
                  })
                }
              >
                <option hidden>Select Assignee</option>
                {user?.map((item) => {
                  return (
                    <option
                      data-name={item.name}
                      value={item.name}
                      data-mail={item.mail}
                      data-profile={item.profile}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </Div>
            <Div class="col-md-4 w-100">
              <label for="" class="form-label">
                Due Date
              </label>
              <input
                type="date"
                class="form-control"
                id=""
                value={task.dueDate}
                onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
              />
            </Div>
          </Div>
        </Div>
        <Div class="my-3 ">
          <input
            type="button"
            class="form-control bg-primary text-white"
            name=""
            id=""
            value="Save"
            onClick={() => addNew()}
          />
        </Div>
      </Modal.Body>
    </Modal>
  );
};

export default EditTask;

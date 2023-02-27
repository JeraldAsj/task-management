import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { categories } from "../../../utilities/Constants";
import { Div, Image, Text } from "../../basicsComponents";
import { FaTrash } from "react-icons/fa";
import "./Task.css";
import dayjs from "dayjs";
import Alert from "react-bootstrap/Alert";

const Task = (props) => {
  const { user, addTask, onHide } = props;
  const [show, setShow] = useState(false);

  const [task, setTask] = useState({
    name: "",
    status: "Backlog",
    categories: {},
    file: [],
    assine: [],
    comment: [],
    dueDate: "",
    dueDateCount: 0,
  });
  setTimeout(() => {
    setShow(false);
  }, 10000);
  let addNew = () => {
    if (
      !task.name ||
      !task.status ||
      !task.dueDate ||
      !task.dueDateCount ||
      task.categories.length == 0 ||
      task.file.length == 0 ||
      task.assine.length == 0
    ) {
      setShow(true);
    } else {
      addTask(task);
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

  const handleCalculate = () => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const start = new Date();
    const end = new Date(task.dueDate);
    const diffInDays = Math.round(Math.abs((start - end) / oneDay));
    setTask({ ...task, dueDateCount: diffInDays });
  };

  const removeFile = (file) => {
    let newFile = task.file.filter((_, index) => index != file);
    setTask({ ...task, file: newFile });
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
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && <Alert variant={"danger"}>Kindly fill all filed</Alert>}

        <Div className={"d-flex align-items-center "}>
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
          <Div class="mb-3 ms-4">
            <Text as={"label"} className="form-label" label={"Attachiment"} />

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
          <Text as={"label"} className="form-label" label={"Task name"} />

          <input
            type="text"
            class="form-control"
            name="name"
            id=""
            placeholder="Name"
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        </Div>
        <div class="mb-3">
          <label for="" class="form-label">
            Category
          </label>
          <select
            class="form-select form-select-lg"
            name="category"
            id=""
            onChange={(e) =>
              setTask({
                ...task,
                categories: {
                  name: e.target.options[e.target.selectedIndex].dataset.name,
                  color: e.target.options[e.target.selectedIndex].dataset.color,
                },
              })
            }
          >
            <option hidden>Select Category</option>
            {categories?.map((item) => {
              return (
                <option data-name={item.name} data-color={item.color}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Assignee
          </label>
          <select
            class="form-select form-select-lg"
            name=""
            id=""
            onChange={(e) =>
              setTask({
                ...task,
                assine: [
                  {
                    name: e.target.options[e.target.selectedIndex].dataset.name,
                    mail: e.target.options[e.target.selectedIndex].dataset.mail,
                    profile:
                      e.target.options[e.target.selectedIndex].dataset.profile,
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
                  data-mail={item.mail}
                  data-profile={item.profile}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div class="col-md-4 w-100">
          <label for="" class="form-label">
            Due Date
          </label>
          <input
            type="date"
            defaultValue={dayjs(new Date()).format("YYYY-MM-DD")}
            class="form-control"
            id=""
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
        </div>
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

export default Task;

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Div, Image, Text } from "../../basicsComponents";
import "./user.css";
const User = (props) => {
  const { setuser, user, setModalShow } = props;
  const [people, setPeople] = useState({
    name: "",
    email: "",
    profile: "",
  });
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(false);
  }, 10000);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    console.log(name, value);
    setPeople((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (people.email == "" || people.name == "" || people.profile == "") {
      setShow(true);
    } else {
      user.push(people);
      setuser(user);
      setModalShow(false);
      setPeople({
        name: "",
        email: "",
        profile: "",
      });
    }
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setPeople({ ...people, profile: reader.result });
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Invite People
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show && <Alert variant={"danger"}>Kindly fill all filed</Alert>}
        <Div className={"d-flex align-items-center "}>
          <Image
            src={
              people.profile
                ? people.profile
                : require("../../../assets/def.png")
            }
            class=" rounded-circle imgs"
            alt=""
          />
          <Div class="mb-3 ms-4">
            <Text as={"label"} className="form-label" label={"Profile Image"} />

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
          <Text as={"label"} className="form-label" label={"Name"} />

          <input
            type="text"
            class="form-control"
            name="name"
            id=""
            placeholder="Name"
            value={people.name}
            onChange={(e) => handleInputChange(e)}
          />
        </Div>
        <Div class="mb-3">
          <Text as={"label"} className="form-label" label={"Email"} />

          <input
            type="email"
            class="form-control"
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            value={people.email}
            onChange={(e) => handleInputChange(e)}
          />
        </Div>
        <Div class="mb-3">
          <input
            type="button"
            class="form-control bg-primary text-white"
            name=""
            id=""
            value="Save"
            onClick={handleSubmit}
          />
        </Div>
      </Modal.Body>
    </Modal>
  );
};

export default User;

import React, { useState } from "react";
import { colors } from "../../utilities/Colors";
import { Div, Image, Text } from "../../components/basicsComponents";
import "./Sidebar.css";
import { menu } from "../../utilities/Constants";
import { useNavigate } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

export const SideBar = () => {
  // eslint-disable-next-line no-undef
  const [menus, setmenus] = useState(menu);
  const navigate = useNavigate();
  const changeActiveMenu = (item) => {
    const { id, link } = item;
    navigate(link);
    const menu = menus.map((item) => {
      if (item.id == id) return { ...item, active: true };
      else return { ...item, active: false };
    });
    setmenus(menu);
  };

  return (
    <Div style={{ background: colors.primery }} className="col-3 parent">
      <Image className={"w-50 my-3 "} src={require("../../assets/ew.png")} />
      <Div
        style={{ background: colors.lightPink, cursor: "pointer" }}
        className={
          "d-flex align-items-center justify-content-evenly border-rad  p-2"
        }
      >
        <Text className={"w-50"} as={"h6"} label="Start New Sprint" />
        <Div
          style={{ background: colors.drakPink }}
          className={"d-flex align-items-center rounded-circle p-3"}
        >
          <GrAdd size={"18px"} color="#ffffff" />
        </Div>
      </Div>

      <Div>
        {menus.map((Item) => {
          return (
            <>
              <Div
                className={"d-flex align-items-center p-2 m-2"}
                onClick={() => changeActiveMenu(Item)}
                style={{ cursor: "pointer" }}
              >
                {
                  <Item.icon
                    color={Item.active ? "#c488fd" : "#BCC6CC"}
                    size="24px"
                  />
                }
                <Text
                  style={
                    Item.active
                      ? {
                          color: colors.drakPink,
                        }
                      : { color: colors.gray }
                  }
                  as="p"
                  className={"mb-0 ms-5"}
                  label={Item.name}
                />
              </Div>
            </>
          );
        })}
      </Div>
      <Div>
        <Div
          style={{ background: colors.lightPink }}
          className={"d-flex parent border-rad py-3 px-5"}
        >
          <Image
            class=" img-hi "
            src={require("../../assets/mob.jpg")}
            alt="Title"
          />
          <Div class="card-body pt-2">
            <Text as={"p"} className="text-center" label="Your trial ends in" />
            <Text
              style={{
                color: colors.drakPink,
              }}
              as={"p"}
              className="text-center"
              label="24 days"
            />
            <Div
              style={{ background: colors.drakPink, cursor: "pointer" }}
              className={
                "d-flex align-items-center justify-content-evenly border-rad p-2"
              }
            >
              <Text
                as={"p"}
                className="text-white mb-0"
                label="Upgrade to pro"
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

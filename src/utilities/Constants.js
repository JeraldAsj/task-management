import {
  HiOutlineDocumentReport,
  HiOutlineUsers,
  HiMenuAlt1,
} from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";
import { colors } from "./Colors";

export const menu = [
  {
    id: 1,
    name: "Backlog",
    icon: CgFileDocument,
    active: false,
    link: "/backlog",
  },
  {
    id: 2,
    name: "Active Sprint",
    icon: HiMenuAlt1,
    active: true,
    link: "/",
  },
  {
    id: 3,
    name: "Calender",
    icon: CiCalendar,
    active: false,
    link: "/calender",
  },
  {
    id: 4,
    name: "Report",
    icon: HiOutlineDocumentReport,
    active: false,
    link: "/report",
  },
  {
    id: 5,
    name: "All Issues",
    icon: TbReportAnalytics,
    active: false,
    link: "/issues",
  },
  {
    id: 6,
    name: "Teams",
    icon: HiOutlineUsers,
    active: false,
    link: "/team",
  },
  {
    id: 7,
    name: "Setting",
    icon: AiOutlineSetting,
    active: false,
    link: "/setting",
  },
];

export const categories = [
  {
    id: 1,
    name: "Landingpage",
    color: colors.landingPage,
  },
  {
    id: 2,
    name: "Dashboard",
    color: colors.dashBoard,
  },
  {
    id: 3,
    name: "Illustration ",
    color: colors.illustration,
  },
  {
    id: 4,
    name: "Mobile App",
    color: colors.mobileApp,
  },
  {
    id: 5,
    name: "Design Critique",
    color: colors.designCritique,
  },
];

export const status = [
  {
    id: 1,
    name: "Backlog",
    color: colors.red,
  },
  {
    id: 2,
    name: "In Progress",
    color: colors.darkBlue,
  },
  {
    id: 3,
    name: "In Review",
    color: colors.drakPink,
  },
  {
    id: 4,
    name: "Done",
    color: colors.green,
  },
];

export const users = [
  {
    id: 1,
    name: "stephen",
    mail: "stephen@gmail.com",
    profile:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "jerald",
    mail: "jerald@gmail.com",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Vincent",
    mail: "Vincent@gmail.com",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export const task = [
  {
    id: 1,
    name: "Backlog",
    categories: {
      name: "Landingpage",
      color: colors.landingPage,
    },
    status: "In Review",
    file: [
      {
        id: 1,
        data: "sdcdc",
      },
      {
        id: 2,
        data: "sdcdc",
      },
    ],
    assine: [
      {
        id: 1,
        name: "stephen",
        mail: "stephen@gmail.com",
        profile:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    comment: ["jnjnjbvjbb b ", "uhjkbhvgcfdser jkhuiyguftghj jiouhkj b "],
    dueDateCount: "2",
    dueDate: "2023-03-01",
  },
  {
    id: 2,
    name: "fbfgbgfbgf",
    categories: {
      name: "Dashboard",
      color: colors.darkBlue,
    },
    status: "In Progress",
    file: [
      {
        id: 1,
        data: "sdcdc",
      },
      {
        id: 2,
        data: "sdcdc",
      },
    ],
    assine: [
      {
        id: 1,
        name: "stephen",
        mail: "stephen@gmail.com",
        profile:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ],
    comment: ["jnjnjbvjbb b ", "uhjkbhvgcfdser jkhuiyguftghj jiouhkj b "],
    dueDateCount: "2",
    dueDate: "2023-03-01",
  },
];

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const navList = [
  { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
  { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
  { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
];

const Navbar = () => {
  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={`${list.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;

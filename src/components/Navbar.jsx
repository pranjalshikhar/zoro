import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const list = [
  { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
  { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
  { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
];

const Navbar = () => {
  return (
    <List>
      {list.map((item) => (
        <ListItem button key={item.id}>
          <Link
            to={`${item.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {item.icon}
            </ListItemIcon>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Navbar;

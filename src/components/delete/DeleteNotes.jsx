import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../../context/DataProvider";
import DeleteNote from "./DeleteNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deleteNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", widht: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container>
          {deleteNotes.map((deleteNote, index) => (
            <Grid item key={index}>
              <DeleteNote deleteNote={deleteNote} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;

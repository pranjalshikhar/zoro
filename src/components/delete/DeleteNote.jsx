import { useContext } from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const DeleteNote = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const restoreNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
    setNotes((prev) => [deleteNote, ...prev]);
  };
  const removeNote = (deleteNote) => {
    const updatedNotes = deleteNotes.filter(
      (data) => data.id !== deleteNote.id
    );
    setDeleteNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>
          {deleteNote.heading}
        </Typography>
        <Typography>{deleteNote.text}</Typography>
      </CardContent>
      <CardContent>
        <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => removeNote(deleteNote)}
        />
        <Restore
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => restoreNote(deleteNote)}
        />
      </CardContent>
    </StyledCard>
  );
};

export default DeleteNote;

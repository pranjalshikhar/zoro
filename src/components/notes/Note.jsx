import { useContext } from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prev) => [note, ...prev]);
  };
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prev) => [note, ...prev]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography
          style={{ fontWeight: "bold", fontSize: "25px", fontStyle: "italic" }}
        >
          {note.heading}
        </Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <Delete fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;

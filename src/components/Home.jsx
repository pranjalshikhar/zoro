import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Archives from "./archive/Archives";
import DeleteNotes from "./delete/DeleteNotes";
import Notes from "./notes/Notes";

const Home = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;

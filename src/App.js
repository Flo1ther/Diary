import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateNote from "./CreateNote";
import ViewNotes from "./ViewNotes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/view" element={<ViewNotes />} />
      </Routes>
    </Router>
  );
}

export default App;

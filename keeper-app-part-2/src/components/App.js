import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note title={note.title} key={note.key} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Homepage from "./component/Homepage";
import Update from "./component/Update";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    // <Homepage />
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

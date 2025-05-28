import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./containers/Main";
import BirArmsPage from "./pages/BirArmsPage";

function App() {
  return (
    // <div>
    //   <Main />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/bir-arms" element={<BirArmsPage />} /> */}
        {/* Add more <Route> here for other pages */}
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import SiteInfo from "./SiteInfo";
import StarTable from "./StarTable";
import SubmitStar from "./SubmitStar";


function App() {


  return (
    <div className="App">
      <Header />
      <SiteInfo />
      <StarTable />
      <SubmitStar/>
    </div>
  );
}

export default App;

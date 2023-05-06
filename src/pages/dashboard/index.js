import React from "react";
import AddFiles from "../../layout/addFiles";
import "./index.css";
import Navbar from "../../components/navbar";

function Index() {
  return (
    <>
      <Navbar />

      <div className="container-fluid bgd">
        <div className="container">
          <AddFiles />
        </div>
      </div>
    </>
  );
}

export default Index;

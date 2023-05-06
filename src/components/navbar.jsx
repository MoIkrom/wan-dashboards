import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import admin from "../assets/admin.png";
import skydash from "../assets/skydash.svg";

function Navbar() {
  const navigate = useNavigate();
  const toNewFile = () => {
    navigate("/newfile");
  };
  return (
    <>
      <MDBNavbar className="shaw" light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img src={skydash} height="30" alt="" loading="lazy" />
          </MDBNavbarBrand>
          <MDBNavbarBrand href="#">
            <div className="d-flex gap-2 align-items-center">
              <p className="m-0">History</p>{" "}
              <p className="m-0" onClick={toNewFile}>
                Add Table
              </p>
            </div>
          </MDBNavbarBrand>

          <MDBNavbarBrand href="#">
            <div className="d-flex gap-2 align-items-center">
              <img src={admin} height="40" alt="" loading="lazy" />
              <p className="m-0">Khairul Ikhwan</p>
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;

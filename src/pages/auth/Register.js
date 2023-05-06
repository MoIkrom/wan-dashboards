import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./Login.css";

function Login() {
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 zz">
              <h1 className="my-5 display-5 fw-bold ls-tight colord">
                The best offer <br />
                <span className="buss">for your business</span>
              </h1>
              <p className="mb-4 opacity-70 lores">Use these awesome forms to login or create new account in your project for free.</p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="container mt-5">
                  <h1 className="text-center fw-bold "> Register Account</h1>
                </div>
                <div className="card-body px-4 pt-4 pb-5 px-md-5">
                  <form>
                    <FormGroup>
                      <Label for="exampleEmail">Username</Label>
                      <Input />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">User ID</Label>
                      <Input />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Password</Label>
                      <Input />{" "}
                      <div className="form-check d-flex justify-content-end align-items-center gap-2 mb-4 me-1 mt-2 ">
                        <label>Show Password</label> <FontAwesomeIcon icon={faEye} className="eye-icon" />
                      </div>
                    </FormGroup>

                    {/* <!-- Submit button --> */}

                    <div className="d-flex mb-5">
                      <Button className="btz" block>
                        Register
                      </Button>
                    </div>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>
                        Don't Have an Account ? <b>Login</b> <Link to="/login">Here</Link>{" "}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
}

export default Login;

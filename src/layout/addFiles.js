import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, FormText, Button } from "reactstrap";
import "./addFiles.css";

function AddFiles() {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className=" d-flex justify-content-center align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className="d-flex justify-content-center align-items-center ">
                <div className=" my-5 zind">
                  <Form>
                    <FormGroup>
                      <Label className="text-white" for="exampleEmail">
                        File Name
                      </Label>
                      <Input id="exampleEmail" name="email" placeholder="Enter File Name here" type="email" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="text-white" for="exampleFile">
                        File
                      </Label>
                      <Input id="exampleFile" name="file" type="file" />
                      <FormText className="text-white"> Upload your Excel file here </FormText>
                    </FormGroup>
                  </Form>
                  <div className="d-flex justify-content-end  my-4">
                    <Button className="col-3" onClick={toDashboard}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddFiles;

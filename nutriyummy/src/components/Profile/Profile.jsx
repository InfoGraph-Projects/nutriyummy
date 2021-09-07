/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";

// Internal Resources
import "./profile.css";

// Profile - Component
export default function Profile() {
  const [option, setOption] = useState("none");
  let complaint = useRef();

  return (
    <React.Fragment>
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>username</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <Form>
                  <Form.Group
                    style={{ padding: "0 1rem" }}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Complaint</Form.Label>
                    <Form.Control
                      type="text"
                      ref={complaint}
                      placeholder="Enter your complaint"
                    />
                  </Form.Group>
                  <Form.Group
                    style={{ padding: "0 1rem" }}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Select the type</Form.Label>
                    <Form.Control
                      as="select"
                      value={option}
                      onChange={(e) => {
                        console.log("e.target.value", e.target.value);
                        setOption(e.target.value);
                      }}
                    >
                      <option value="delivery">Delivery</option>
                      <option value="product">Product</option>
                      <option value="price">Price</option>
                    </Form.Control>
                  </Form.Group>
                  <div className="btn">
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  {complaints.map(
                    (elm) =>
                      elm.user === user.username && (
                        <>
                          <div class="row">
                            <span style={{ padding: "1rem 1rem" }}>
                              Type : {elm.type}
                            </span>
                            <span style={{ padding: "1rem 1rem" }}>
                              Complaint : {elm.complaint}
                            </span>
                            <span style={{ padding: "1rem 1rem" }}>
                              Status: {elm.status}
                            </span>
                            <span style={{ padding: "1rem 1rem" }}>
                              Created at:{" "}
                              {moment(elm.created).format(
                                "MMMM Do YYYY, h:mm:ss a"
                              )}
                            </span>
                          </div>
                          <hr />
                        </>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import moment from "moment";
import axios from "axios";

// 3rd Party UI Resources
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Internal Resources
import "./profile.css";
import { AuthContext } from "../../context/authContext";

// Profile - Component
export default function Profile() {
  window.location.reload(false);
  const context = useContext(AuthContext);
  const history = useHistory();
  if (!context.user.user) {
    history.push("/");
  }
  const user = context.user.user;
  const userObj = context.user;
  const [option, setOption] = useState("none");
  let complaint = useRef();

  // Get complaints when enter the profile
  if (context.complaints.length === 0) {
    context.getComplaints();
  }

  // Function to add new complaint
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      complaint: complaint.current.value,
      type: option,
      user: user.username,
      status: "pending",
    };

    const config = {
      headers: { Authorization: `Bearer ${userObj.token}` },
    };

    await axios.post(
      `https://nutriyummy-backend.herokuapp.com/api/v1/complaints`,
      obj,
      config
    );
  };

  return (
    <React.Fragment>
      <div className="container" style={{ overflow: "scroll", height: "77%" }}>
        <div className="main-body">
          <div className="row gutters-sm main-div">
            <div className="col-md-4 mb-3" style={{ padding: "1rem 0" }}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{user.username ? user.username : "username"}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <Form onSubmit={handleSubmit}>
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

            <div className="col-md-8">
              {context.complaints.map(
                (elm) =>
                  elm.user === user.username && (
                    <div className="row data data-card">
                      <div className="card comp-card">
                        <h5 className="card-header">
                          {elm.user}{" "}
                          <span style={{ float: "right", fontSize: "15px" }}>
                            {moment(elm.created).startOf("day").fromNow()}
                          </span>{" "}
                        </h5>
                        <div className="card-body">
                          <h5 className="card-title">{elm.type}</h5>
                          <p className="card-text">{elm.complaint}</p>
                          <p className="card-text">
                            {" "}
                            {moment(elm.created).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </p>
                          <div className="btn-div">
                            {" "}
                            <button
                              className={`btn btn-${
                                elm.status === "pending"
                                  ? "danger"
                                  : elm.status === "resolved"
                                  ? "success"
                                  : "warning"
                              } my-1`}
                            >
                              {elm.status}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

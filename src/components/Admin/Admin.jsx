/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useContext } from "react";
import moment from "moment";
import axios from "axios";

// 3rd Party UI Resources
import { Pie } from "react-chartjs-2";

// Internal Resources
import "./admin.css";
import { AuthContext } from "../../context/authContext";

// Admin - Component
export default function Admin() {
  const context = useContext(AuthContext);
  const user = context.user;
  let option = "";
  let id = 0;

  // Get complaints when enter the profile
  if (context.complaints.length === 0) {
    context.getComplaints();
  }

  // Assign the option from select value
  const handleChangeOption = (e) => {
    e.preventDefault();
    option = e.target.value;
  };

  // Define which complaint should updated
  const handleIdx = (idx) => {
    id = context.complaints[idx]._id;
  };

  // Function to update the complaint
  const handleChange = async (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    const obj = {
      status: option,
    };

    await axios.put(
      `https://nutriyummy.herokuapp.com/api/v1/complaints/${id}`,
      obj,
      config
    );

    context.getComplaints();
  };

  // DataSet and Data for the Pie Chart
  const dataSetType = context.dataSetType;

  const dataType = {
    labels: ["Delivery", "Price", "Product"],
    datasets: [
      {
        label: "# of Votes",
        data: dataSetType,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataSetStatus = context.dataSetStatus;

  const dataStatus = {
    labels: ["Pending", "Resolved", "Dismissed"],
    datasets: [
      {
        label: "# of Votes",
        data: dataSetStatus,
        backgroundColor: [
          "rgba(255,0,0,0.2)",
          "rgba(0,128,0, 0.2)",
          "rgba(255,255,0, 0.2)",
        ],
        borderColor: [
          "rgba(255,0,0, 1)",
          "rgba(0,128,0, 1)",
          "rgba(255,255,0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="container profile">
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
                      <h4>
                        {user.user.username ? user.user.username : "username"}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="header">
                  <h5 style={{ padding: "0.5rem 0.5rem" }} className="title">
                    Complaints By Type
                  </h5>
                </div>
                <Pie data={dataType} style={{ height: "100px" }} />
              </div>
              <div className="card mt-3">
                <div className="header">
                  <h5 style={{ padding: "0.5rem 0.5rem" }} className="title">
                    Complaints By Status
                  </h5>
                </div>
                <Pie data={dataStatus} style={{ height: "100px" }} />
              </div>
            </div>
            <div className="col-md-8">
              {context.complaints.map((elm, idx) => (
                <div key={idx} className="row data data-card">
                  <div className="card comp-card">
                    <form onSubmit={handleChange}>
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
                          <select
                            className="btn btn-success"
                            onChange={handleChangeOption}
                          >
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved</option>
                            <option value="dismissed">Dismissed</option>
                          </select>
                          <button
                            className="btn btn-primary my-1"
                            onClick={() => {
                              handleIdx(idx);
                            }}
                            type="submit"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

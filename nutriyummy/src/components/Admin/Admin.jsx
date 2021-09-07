/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React from "react";
import moment from "moment";

// Internal Resources
import "./admin.css";

// Admin - Component
export default function Admin() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm divv">
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
                <div className="header">
                  <h5 style={{ padding: "0.5rem 0.5rem" }} className="title">
                    Complaints By Type
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body card-data">
                  {complaints.map((elm, idx) => (
                    <>
                      <form>
                        <div className="row data">
                          <span style={{ padding: "1rem 1rem" }}>
                            Type : {elm.type}
                          </span>
                          <span style={{ padding: "1rem 1rem" }}>
                            User : {elm.user}
                          </span>
                          <span style={{ padding: "1rem 1rem" }}>
                            Complaint : {elm.complaint}
                          </span>
                          <span style={{ padding: "1rem 1rem" }}>
                            Status: {elm.status} <br />
                            Change the status
                            <select>
                              <option value="pending">Pending</option>
                              <option value="resolved">Resolved</option>
                              <option value="dismissed">Dismissed</option>
                            </select>
                            <button type="submit">Update</button>
                          </span>
                          <span style={{ padding: "1rem 1rem" }}>
                            Created at:{" "}
                            {moment(elm.created).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </span>
                        </div>
                      </form>
                      <hr />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
import React, { useState } from "react";
import axios from "axios";

// Create AuthContext
export const AuthContext = React.createContext();

// Create AuthProvider
function AuthProvider(props) {
  // Create the States that we need
  const [user, setUser] = useState({});
  const [complaints, setComplaints] = useState([]);
  const [dataSetType, setDataSetType] = useState([]);
  const [dataSetStatus, setDataSetStatus] = useState([]);

  // Function to get the Complaints
  const getComplaints = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const res = await axios.get(
      "https://nutriyummy.herokuapp.com/api/v1/complaints",
      config
    );
    console.log("res from setting", res);
    setComplaints(res.data);

    // Define the Counts for the Chart
    let deliveryCount = 0;
    let priceCount = 0;
    let productCount = 0;
    res.data.forEach((elm) => {
      if (elm.type === "delivery") {
        deliveryCount = deliveryCount + 1;
      } else if (elm.type === "price") {
        priceCount = priceCount + 1;
      } else {
        productCount = productCount + 1;
      }
    });
    setDataSetType([deliveryCount, priceCount, productCount]);
    let pendingCount = 0;
    let resolvedCount = 0;
    let dismissedCount = 0;
    res.data.forEach((elm) => {
      if (elm.status === "pending") {
        pendingCount = pendingCount + 1;
      } else if (elm.status === "resolved") {
        resolvedCount = resolvedCount + 1;
      } else {
        dismissedCount = dismissedCount + 1;
      }
    });
    setDataSetStatus([pendingCount, resolvedCount, dismissedCount]);
  };

  const state = {
    user,
    setUser,
    getComplaints,
    complaints,
    dataSetType,
    dataSetStatus,
  };
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
export default AuthProvider;

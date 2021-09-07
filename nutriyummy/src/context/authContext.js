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
  const [dataSet, setDataSet] = useState([]);

  // Function to get the Complaints
  const getComplaints = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const res = await axios.get(
      "https://nutriyummy-backend.herokuapp.com/api/v1/complaints",
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
    setDataSet([deliveryCount, priceCount, productCount]);
  };

  const state = {
    user,
    setUser,
    getComplaints,
    complaints,
    dataSet,
  };
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
export default AuthProvider;

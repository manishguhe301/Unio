import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Portal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <div className="mainDiv">
      <div className="PortalDiv">
        <h5>Thank You For Logging In</h5>
        <span>You will be redirecting to login page in {5}S</span>
      </div>
    </div>
  );
};

export default Portal;

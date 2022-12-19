import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const navigate = useNavigate();
  const Data = {
    UserName: "",
    UserPhone: "",
    UserEmail: "",
    UserAddress: "",
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Name, Phone, email, Address);
    if (Name !== "" && Phone !== "" && Address !== "" && email !== "") {
      Data.UserName = Name;
      Data.UserPhone = Phone;
      Data.UserEmail = email;
      Data.UserAddress = Address;
      console.log(Data);
      navigate("/portal");
    }
  };
  return (
    <div className="MainDiv">
      <h1 className="heading"> Registration</h1>
      <div className="Registration">
        <form className="form">
          <div
            className="input-group input-group-sm mb-3"
            style={{ width: "350px" }}
          >
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleNameChange}
            />
          </div>
          <div
            className="input-group input-group-sm mb-3"
            style={{ width: "350px" }}
          >
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Phone No.
            </span>
            <input
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handlePhoneChange}
            />
          </div>{" "}
          <div
            className="input-group input-group-sm mb-3"
            style={{ width: "350px" }}
          >
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Email ID
            </span>
            <input
              type="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleMailChange}
            />
          </div>{" "}
          <div
            className="input-group input-group-sm mb-3"
            style={{ width: "350px" }}
          >
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Address
            </span>
            <textarea
              className="form-control"
              id="floatingTextarea"
              onChange={handleAddressChange}
            ></textarea>
          </div>
          <div className="button_Submit">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

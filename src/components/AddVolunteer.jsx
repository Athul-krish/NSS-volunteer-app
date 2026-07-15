import axios from "axios";
import React, { useState } from "react";

const AddVolunteer = () => {
  const [volunteer, setVolunteer] = useState({
    volunteerId: "",
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    department: "",
    yearOfStudy: "",
    campName: "",
    hoursCompleted: "",
    address: "",
    unitNumber: "",
  });

  const inputHandler = (e) => {
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value,
    });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3000/add", volunteer)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "12px",
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background:
          "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">

            <div
              className="card border-0 shadow-lg"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                borderRadius: "22px",
              }}
            >
              <div className="card-body p-5">

                <h2 className="text-center text-white fw-bold mb-2">
                  Add Volunteer
                </h2>

                <p
                  className="text-center mb-5"
                  style={{ color: "rgba(255,255,255,.75)" }}
                >
                  Register a new NSS Volunteer
                </p>

                <div className="row g-4">

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Volunteer ID
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      name="volunteerId"
                      placeholder="Enter Volunteer ID"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      name="fullName"
                      placeholder="Enter Full Name"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      style={inputStyle}
                      name="email"
                      placeholder="Enter Email"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Phone
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      name="phone"
                      placeholder="Enter Phone Number"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      style={inputStyle}
                      name="dateOfBirth"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Gender
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="gender"
                      onChange={inputHandler}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                   <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Blood Group
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="bloodGroup"
                      onChange={inputHandler}
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Department
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="department"
                      onChange={inputHandler}
                    >
                      <option value="">Select Department</option>
                      <option value="MCA">MCA</option>
                      <option value="MBA">MBA</option>
                      <option value="BCA">BCA</option>
                      <option value="BSc CS">BSc CS</option>
                      <option value="BCom">BCom</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Year of Study
                    </label>

                    <select
                      className="form-select"
                      style={inputStyle}
                      name="yearOfStudy"
                      onChange={inputHandler}
                    >
                      <option value="">Select Year</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Camp Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      name="campName"
                      placeholder="Enter Camp Name"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Hours Completed
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      style={inputStyle}
                      name="hoursCompleted"
                      placeholder="Enter Hours Completed"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold">
                      Unit Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      style={inputStyle}
                      name="unitNumber"
                      placeholder="Enter Unit Number"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-white fw-semibold">
                      Address
                    </label>

                    <textarea
                      className="form-control"
                      rows="4"
                      style={inputStyle}
                      placeholder="Enter Address"
                      name="address"
                      onChange={inputHandler}
                    ></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="d-grid">
                      <button
                        className="btn fw-bold py-3"
                        style={{
                          background: "linear-gradient(90deg,#28a745,#20c997)",
                          color: "white",
                          border: "none",
                          borderRadius: "12px",
                          fontSize: "18px",
                          transition: "0.3s",
                        }}
                        onClick={readValues}
                        onMouseOver={(e) => {
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow =
                            "0 10px 25px rgba(32,201,151,.35)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        Add Volunteer
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      <style>{`

        .form-control::placeholder,
        textarea::placeholder{
          color: rgba(255,255,255,.65);
        }

        .form-control,
        .form-select,
        textarea{
          transition: .3s;
        }

        .form-control:focus,
        .form-select:focus,
        textarea:focus{

          background: rgba(255,255,255,.15)!important;
          color:white!important;
          border-color:#20c997!important;
          box-shadow:0 0 15px rgba(32,201,151,.35)!important;

        }

        .form-select option{
          background:#203a43;
          color:white;
        }

        input[type="date"]::-webkit-calendar-picker-indicator{
          filter:invert(1);
          cursor:pointer;
        }

        .card{
          transition:.35s;
        }

        .card:hover{
          transform:translateY(-4px);
          box-shadow:0 15px 35px rgba(0,0,0,.35)!important;
        }

      `}</style>
       </div>
  );
};

export default AddVolunteer;
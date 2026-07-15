import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewVolunteer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      }}
    >
      <div className="container">
        <div
          className="card border-0 shadow-lg"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
          }}
        >
          <div className="card-body p-4">
            <h2 className="text-center text-white fw-bold mb-2">
              Registered Volunteers
            </h2>

            <p
              className="text-center mb-4"
              style={{ color: "rgba(255,255,255,.75)" }}
            >
              View all NSS Volunteer Details
            </p>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-light" role="status"></div>

                <p className="text-white mt-3">Loading Volunteers...</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Volunteer ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Blood Group</th>
                      <th>Department</th>
                      <th>Year</th>
                      <th>Camp</th>
                      <th>Hours</th>
                      <th>Unit</th>
                      <th>Address</th>
                    </tr>
                  </thead>

                  <tbody>
                    {" "}
                    {data.map((value, index) => (
                      <tr key={index}>
                        <td>{value.volunteerId}</td>
                        <td>{value.fullName}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.dateOfBirth}</td>
                        <td>{value.gender}</td>
                        <td>{value.bloodGroup}</td>
                        <td>{value.department}</td>
                        <td>{value.yearOfStudy}</td>
                        <td>{value.campName}</td>
                        <td>{value.hoursCompleted}</td>
                        <td>{value.unitNumber}</td>
                        <td>{value.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`

        .table{
          color:white;
        }

        .table thead th{
          background:rgba(255,255,255,.15);
          color:#20c997;
          border:none;
          white-space:nowrap;
          font-weight:600;
        }

        .table tbody td{
          background:transparent;
          color:white;
          border-color:rgba(255,255,255,.12);
          white-space:nowrap;
          vertical-align:middle;
        }

        .table-hover tbody tr{
          transition:.25s;
        }

        .table-hover tbody tr:hover{
          background:rgba(255,255,255,.08);
          transform:scale(1.005);
        }

        .card{
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-4px);
          box-shadow:0 15px 35px rgba(0,0,0,.35)!important;
        }

        ::-webkit-scrollbar{
          height:8px;
        }

        ::-webkit-scrollbar-thumb{
          background:#20c997;
          border-radius:20px;
        } `}</style>
    </div>
  );
};

export default ViewVolunteer;

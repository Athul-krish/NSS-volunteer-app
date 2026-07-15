import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="container py-5">

        <div className="text-center text-white mb-5">

          <h1 className="display-3 fw-bold">
            NSS Volunteer Management System
          </h1>

          <p
            className="mx-auto mt-4"
            style={{ maxWidth: "700px", fontSize: "1.2rem" }}
          >
            A centralized platform to register, organize and manage NSS
            volunteers participating in camps and community service
            activities.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>📝</div>

                <h4 className="mt-3">Volunteer Registration</h4>

                <p className="mt-3">
                  Register NSS volunteers with complete academic and
                  personal information.
                </p>

              </div>
            </div>

          </div>

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>📋</div>

                <h4 className="mt-3">Manage Records</h4>

                <p className="mt-3">
                  View and manage all registered volunteers from one
                  dashboard.
                </p>

              </div>
            </div>

          </div>

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-lg h-100"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <div className="card-body text-center p-4">

                <div style={{ fontSize: "55px" }}>🌿</div>

                <h4 className="mt-3">Community Service</h4>

                <p className="mt-3">
                  Encourage volunteer participation and maintain NSS
                  activities efficiently.
                </p>

              </div>
            </div>

          </div>

        </div>

        <div
          className="card border-0 shadow-lg mt-5"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="card-body p-5">

            <h3 className="mb-3">
              About the Project
            </h3>

            <p className="mb-0">
              This application is developed using the MERN Stack
              (MongoDB, Express.js, React.js and Node.js). It provides a
              simple and efficient solution for managing NSS volunteers,
              their camp participation, unit allocation and volunteer
              information through a modern web interface.
            </p>

          </div>
        </div>

      </div>
    </div>
    </>        
  );
};

export default Home;
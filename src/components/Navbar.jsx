import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
        background: "rgba(15,32,39,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{ fontSize: "1.5rem" }}
        >
          🌿 NSS Volunteer
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <Link className="nav-link nav-item-custom" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link nav-item-custom" to="/add">
                Add Volunteer
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link nav-item-custom" to="/view">
                View Volunteers
              </Link>
            </li>

          </ul>

        </div>

      </div>

      <style>{`
        .nav-item-custom{
          color:white !important;
          font-weight:500;
          transition:.3s;
          border-radius:8px;
          padding:8px 15px !important;
        }

        .nav-item-custom:hover{
          background:#20c997;
          color:white !important;
        }

        .navbar-brand{
          transition:.3s;
        }

        .navbar-brand:hover{
          color:#20c997 !important;
        }
      `}</style>

    </nav>
  );
};

export default Navbar;
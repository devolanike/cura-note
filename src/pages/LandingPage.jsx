import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/dashboard">
          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            🚧 Dev Mode: Go to Dashboard ➔
          </button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;

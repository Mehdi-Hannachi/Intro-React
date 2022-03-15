import React from "react";
import Logo from "../../assets/images/logo.png";
import "./logosection.css";

const LogoSection = () => {
  const text = "hello";

  return (
    <div className="logo-section" style={{ marginTop: "50px" }}>
      <img src={Logo} alt="" />

      <span> {text}</span>
    </div>
  );
};

export default LogoSection;

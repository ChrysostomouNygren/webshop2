import React from "react";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  let navigate = useNavigate();

  return <button onClick={() => navigate("/admin")}>Tillbaka</button>;
}

export default BackBtn;

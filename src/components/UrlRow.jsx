import React from "react";
import {Link} from "react-router-dom";

function UrlRow({code,original }) {
  return (
    <div style={{marginBottom:"10px" }}>
      <p>
        <b>Short:</b>{" "}
        <Link to={`/${code}`}>{window.location.origin}/{code}</Link>
      </p>
      <p>
        <b>Original:</b> {original}
      </p>
      <hr/>
    </div>
  );
}

export default UrlRow;

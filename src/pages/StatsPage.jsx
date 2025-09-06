import React from "react";
import {getAllUrls} from "../services/storage";

function StatsPage() {
  const urls=getAllUrls();

  return (
    <div style={{padding:"20px"}}>
      <h1>Stats</h1>
      {urls.map((u) =>(
        <div key={u.code}>
          <p>{u.code} → {u.original} | Visits: {u.visits}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsPage;

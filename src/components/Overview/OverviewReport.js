import React from "react";

const OverviewReport = ({ data }) => {
  const { title, total } = data;
  return (
    <div>
      <div
        style={{ width: "240px", height: "140px" }}
        className="border rounded"
      >
        <p>{title}</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default OverviewReport;

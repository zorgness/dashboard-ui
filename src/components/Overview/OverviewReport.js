import React from "react";

const OverviewReport = ({ data }) => {
  const { title, total } = data;
  return (
    <div style={{ width: "300px", height: "150px" }} className="border rounded">
      <p>{title}</p>
      <p>{total}</p>
    </div>
  );
};

export default OverviewReport;

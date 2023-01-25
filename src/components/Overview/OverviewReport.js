import React from "react";

const OverviewReport = ({ data }) => {
  const { title, total } = data;
  return (
    <div
      style={{ width: "280px", height: "132px" }}
      className="border rounded overview-report"
    >
      <h2 className="mx-4 mt-4">
        {total} <i class="fa-solid fa-globe text-white mx-4"></i>
      </h2>
      <p className="mx-4">{title}</p>
    </div>
  );
};

export default OverviewReport;

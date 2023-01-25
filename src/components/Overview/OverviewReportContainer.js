import React from "react";
import { data } from "./../../data/dataOverviewReport";
import OverviewReport from "./OverviewReport";

const OverviewReportContainer = () => {
  return (
    <div className="d-flex justify-content-between flex-wrap m-4">
      {data.map((data) => {
        return <OverviewReport key={data.id} data={data} />;
      })}
    </div>
  );
};

export default OverviewReportContainer;

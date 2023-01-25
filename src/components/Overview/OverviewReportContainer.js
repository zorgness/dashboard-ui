import React from "react";
import { data } from "./../../data/dataOverviewReport";
import OverviewReport from "./OverviewReport";

const OverviewReportContainer = () => {
  return (
    <>
      {data.map((data) => {
        return <OverviewReport key={data.id} data={data} />;
      })}
    </>
  );
};

export default OverviewReportContainer;

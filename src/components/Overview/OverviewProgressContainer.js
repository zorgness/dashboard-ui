import React from "react";
import { data } from "./../../data/dataOverviewProgress";
import OverviewProgress from "./OverviewProgress";

const OverviewProgressContainer = () => {
  return (
    <div className="bg-primary d-flex justify-content-between flex-wrap m-4">
      {data.map((data) => {
        return <OverviewProgress key={data.id} data={data} />;
      })}
    </div>
  );
};

export default OverviewProgressContainer;

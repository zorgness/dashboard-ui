import React from "react";
import { data } from "./../../data/dataOverviewProgress";
import OverviewProgress from "./OverviewProgress";

const OverviewProgressContainer = () => {
  return (
    <>
      {data.map((data) => {
        return <OverviewProgress key={data.id} data={data} />;
      })}
    </>
  );
};

export default OverviewProgressContainer;

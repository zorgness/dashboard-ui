import React from "react";
import { data } from "../../data/dataOverview";
import CardOverview from "../Cards/CardOverview";

const OverviewCardContainer = () => {
  return (
    <div className="bg-success d-flex flex-wrap justify-content-between m-4 ">
      {data.map((data) => {
        return <CardOverview key={data.id} data={data} />;
      })}
    </div>
  );
};

export default OverviewCardContainer;

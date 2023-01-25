import React from "react";
import { data } from "../../data/dataOverview";
import CardOverview from "../Cards/CardOverview";

const OverviewCardContainer = () => {
  return (
    <>
      {data.map((data) => {
        return <CardOverview key={data.id} data={data} />;
      })}
    </>
  );
};

export default OverviewCardContainer;

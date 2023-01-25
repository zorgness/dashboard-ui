import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Card } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

const OverviewProgress = ({ data }) => {
  const { title, total, percent } = data;
  return (
    <Card style={{ width: "15rem" }} className="text-center">
      <Card.Body>
        <div style={{ height: "200px", width: "200px" }} className="card-body">
          <CircularProgressbar value={percent} text={`${percent}%`} />
        </div>
        <Card.Title>{total}</Card.Title>
        <Card.Subtitle>{title}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default OverviewProgress;

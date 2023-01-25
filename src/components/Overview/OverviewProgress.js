import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Card } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

const OverviewProgress = ({ data }) => {
  const { title, total, percent } = data;
  return (
    <Card style={{ width: "200px", height: "300px" }} className="text-center">
      <Card.Body className="d-flex flex-column align-items-center">
        <div style={{ height: "120px", width: "120px" }}>
          <CircularProgressbar value={percent} text={`${percent}%`} />
        </div>
        <Card.Title>{total}</Card.Title>
        <Card.Subtitle>{title}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default OverviewProgress;

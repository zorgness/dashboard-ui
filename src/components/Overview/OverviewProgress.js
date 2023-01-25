import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Card } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

const OverviewProgress = ({ data }) => {
  const { title, total, percent, color } = data;
  return (
    <Card className="text-center overview-progress">
      <Card.Body className="d-flex flex-column align-items-center">
        <div style={{ height: "120px", width: "120px" }}>
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "24px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `rgba(${color})`,
              textColor: "black",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="mt-4">
          <Card.Title>{total}</Card.Title>
          <Card.Text className="text-secondary">{title}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OverviewProgress;

import React from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

const Performance = () => {
  return (
    <Card className="m-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div>
          <ProgressBar animated now={45} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Performance;

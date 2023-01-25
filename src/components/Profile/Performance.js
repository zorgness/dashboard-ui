import React from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

const Performance = () => {
  return (
    <Card className="m-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <div className="mb-2">
          <ProgressBar animated now={45} />
        </div>
        <div>
          <ProgressBar animated now={78} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Performance;

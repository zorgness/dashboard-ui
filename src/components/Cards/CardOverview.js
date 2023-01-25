import React from "react";
import Card from "react-bootstrap/Card";

const CardOverview = ({ data }) => {
  const { title, total, period } = data;
  return (
    <Card className="card-overview" text={"white"} style={{ width: "18rem" }}>
      <Card.Body className="mx-4">
        <Card.Text>
          <strong>{title}</strong>
        </Card.Text>
        <Card.Title style={{ fontSize: "36px" }}>{total}</Card.Title>
        <Card.Text>
          <strong>{period}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardOverview;

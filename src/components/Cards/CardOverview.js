import React from "react";
import Card from "react-bootstrap/Card";

const CardOverview = ({ data }) => {
  const { title, total, period } = data;
  return (
    <Card
      bg={"primary"}
      text={"white"}
      style={{ width: "15rem" }}
      className="mb-2"
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{total}</Card.Text>
        <Card.Text>{period}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardOverview;

import React from "react";
import Card from "react-bootstrap/Card";

const CardOverview = ({ data }) => {
  const { title, total, period } = data;
  return (
    <Card bg={"primary"} text={"white"} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{total}</Card.Text>
        <Card.Text>{period}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardOverview;

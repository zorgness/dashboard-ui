import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Layout from "../../layout/Layout";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const Schedule = () => {
  return (
    <Layout>
      <Row lg={2}>
        <Col className="content-left">
          <ContentLeft />
        </Col>
        <Col className="content-right">
          <ContentRight />
        </Col>
      </Row>
    </Layout>
  );
};

export default Schedule;

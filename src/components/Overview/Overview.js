import React from "react";
import Layout from "../../layout/Layout";
import { Row, Col } from "react-bootstrap";
import CardOverview from "../Cards/CardOverview";

const Overview = () => {
  return (
     <Layout>
      <Row>
        <Col>
        <CardOverview/>
        <CardOverview/>
        <CardOverview/>
        <CardOverview/>
        </Col>
      </Row>
    </Layout>
  )
};

export default Overview;

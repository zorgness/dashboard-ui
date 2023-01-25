import React from "react";
import Layout from "../../layout/Layout";
import { Row, Col } from "react-bootstrap";
import OverviewCardContainer from "./OverviewCardContainer";
import OverviewReportContainer from "./OverviewReportContainer";
import OverviewProgressContainer from "./OverviewProgressContainer";

const Overview = () => {
  return (
    <Layout>
      <Row>
        <Col className="bg-danger">
          <OverviewCardContainer />
        </Col>
      </Row>
      <Row lg={2}>
        <Col className="bg-info content-left">
          <OverviewProgressContainer />
        </Col>

        <Col className="bg-dark content-right">
          <OverviewReportContainer />
        </Col>
      </Row>
    </Layout>
  );
};

export default Overview;

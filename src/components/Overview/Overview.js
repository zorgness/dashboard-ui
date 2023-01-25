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
        <Col className="">
          <OverviewCardContainer />
        </Col>
      </Row>
      <Row lg={2}>
        <Col className="content-left">
          <OverviewProgressContainer />
        </Col>

        <Col className="content-right">
          <OverviewReportContainer />
        </Col>
      </Row>
    </Layout>
  );
};

export default Overview;

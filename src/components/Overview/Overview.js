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
        <Col className="bg-danger d-flex flex-wrap justify-content-around p-3">
          <OverviewCardContainer />
        </Col>
      </Row>
      <Row lg={2}>
        <Col className=" bg-info content-left d-flex justify-content-around align-items-center flex-wrap p-3">
          <OverviewReportContainer />
        </Col>

        <Col className="bg-dark content-right d-flex justify-content-around p-3 flex-wrap">
          <OverviewProgressContainer />
        </Col>
      </Row>
    </Layout>
  );
};

export default Overview;

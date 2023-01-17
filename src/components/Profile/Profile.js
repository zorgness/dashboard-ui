import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../layout/Layout";
import InfoBlock from "./InfoBlock";
import Report from "./Report";
import Performance from "./Performance";

const Profile = () => {
  return (
    <Layout>
      <Row lg={2}>
        <Col className="content-left bg-danger">
          <InfoBlock />
        </Col>
        <Col className="content-right bg-info">
          <Row>
            <div>
              <Performance />
            </div>
          </Row>
          <Row>
            <div>
              <Report />
            </div>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;

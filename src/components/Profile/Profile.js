import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../layout/Layout";
import Header from "./Header";

const Profile = () => {
  return (
    <Layout>
      <Container style={{ padding: "0px" }}>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="m-4">Profile</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Profile;

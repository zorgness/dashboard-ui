import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./Header";
import Search from "./Search";
import Layout from "../../layout/Layout";

const Schedule = () => {
  return (
    <Layout>
      <Container>
        <Row className="header-row" lg={2}>
          <Col className="content-left">
            <Header />
          </Col>
          <Col className="content-right">
            <Search />
          </Col>
        </Row>
        <Row lg={2}>
          <Col className="content-left">
            <ContentLeft />
          </Col>
          <Col className="content-right">
            <ContentRight />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Schedule;

import React from "react";
import Navigation from "../components/Navigation";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./../components/Header";
import Search from "./../components/Search";
import { changeTitle } from "../utils/changeTitle";

const Layout = ({ children }) => {
  const [title, setTitle] = React.useState();

  React.useEffect(() => {
    setTitle(changeTitle());
  }, []);
  return (
    <div className="d-flex">
      <Navigation />

      <Container className="d-flex flex-column">
        <Row className="header-row" lg={2}>
          <Col className="content-left">
            <Header title={title} />
          </Col>
          <Col className="content-right">
            <Search />
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
};

export default Layout;

import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../layout/Layout";
import InProgress from "../../InProgress";

const Chat = () => {
  return (
    <Layout>
      <Container>
        <InProgress />
      </Container>
    </Layout>
  );
};

export default Chat;

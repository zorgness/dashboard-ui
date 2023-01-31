import React from "react";
import Layout from "../layout/Layout";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Layout>
      <div className="text-center h-50 d-flex justify-content-center align-items-center">
        <div>
          <Spinner animation="grow" role="status" />
        </div>
      </div>
    </Layout>
  );
};

export default Loader;

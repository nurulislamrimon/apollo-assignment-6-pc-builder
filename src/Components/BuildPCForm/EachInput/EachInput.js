import React from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const EachInput = ({ title, field }) => {
  const router = useRouter();
  return (
    <div>
      <Row
        style={{ alignItems: "center", borderBottom: "1px solid gainsboro" }}
      >
        <Col flex="auto">
          <Col flex="auto">{/* <Image src=/> */}</Col>
          <Col flex="auto">
            <h4>{title}</h4>
            <p>{field}</p>
          </Col>
        </Col>
        <Col>
          <Button
            onClick={() => router.push(`/buildpc/${field}`)}
            size="large"
            style={{ color: "Blue", borderColor: "blue" }}
          >
            Choose
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EachInput;

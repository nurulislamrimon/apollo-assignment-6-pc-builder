import React from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { removeAComponent } from "@/Redux/Features/product.slice";
import { useDispatch } from "react-redux";

const EachInput = ({ title, product, field }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div>
      <Row
        style={{ alignItems: "center", borderBottom: "1px solid gainsboro" }}
      >
        <Col flex="auto">
          <Col flex="auto">
            <h4>{title}</h4>
            <p>
              {product?.productName.length > 70
                ? product?.productName.slice(0, 70).concat("...")
                : product?.productName || `Please choose a ${title}`}
            </p>
          </Col>
        </Col>
        {product?.price && (
          <Col flex="100px" style={{ fontWeight: "bold" }}>
            {product?.price}
          </Col>
        )}
        <Col style={{ display: "flex", justifyContent: "center" }}>
          {product && (
            <Button
              onClick={() => dispatch(removeAComponent(product))}
              style={{ marginRight: "5px" }}
            >
              X
            </Button>
          )}
          <Button
            onClick={() => router.push(`/buildpc/${field}`)}
            style={{
              color: "blue",
              borderColor: !product && "blue",
            }}
          >
            {product ? (
              <Image
                src="/icons/repeat-solid.svg"
                alt="icon"
                height={18}
                width={18}
                style={{ paddingTop: "5px" }}
              />
            ) : (
              "Choose"
            )}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EachInput;

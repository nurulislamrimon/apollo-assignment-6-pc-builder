import React, { useEffect, useState } from "react";
import style from "./BuildPCForm.module.css";
import EachInput from "./EachInput/EachInput";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "antd";

const BuildPCForm = () => {
  const [isComplete, setIsComplete] = useState(false);
  const products = useSelector((state) => state.product);
  let totalAmount = 0;

  useEffect(() => {
    if (products.components.length === 5) {
      setIsComplete(true);
    }
  }, [products]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  products.components.forEach((product) => {
    totalAmount += Number(product.price.replace(/\,/g, "").replace(/\$/g, ""));
  });

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1>Build Your Personal Computer</h1>

      <EachInput
        title="CPU / Processor"
        field="processor"
        product={products?.components?.find(
          (product) => product?.category === "Processor"
        )}
      />
      <EachInput
        title="Motherboard"
        field="motherboard"
        product={products?.components?.find(
          (product) => product?.category === "Motherboard"
        )}
      />
      <EachInput
        title="RAM"
        field="RAM"
        product={products?.components?.find(
          (product) => product?.category === "RAM"
        )}
      />
      <EachInput
        title="Storage Device"
        field="storage device"
        product={products?.components?.find(
          (product) => product?.category === "Storage Device"
        )}
      />
      <EachInput
        title="Monitor"
        field="monitor"
        product={products?.components?.find(
          (product) => product?.category === "Monitor"
        )}
      />
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Col>
          {totalAmount && (
            <h2 className={style.totalContainer}>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>
          )}
        </Col>
        <Col>
          <Button
            type="primary"
            style={{ fontSize: "large", height: "fit-content" }}
            disabled={!isComplete}
          >
            Complete Build
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default BuildPCForm;

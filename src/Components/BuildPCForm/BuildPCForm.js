import React, { useEffect, useState } from "react";
import style from "./BuildPCForm.module.css";
import EachInput from "./EachInput/EachInput";
import { useSelector } from "react-redux";
import { Button, Col, Row, notification } from "antd";

const BuildPCForm = () => {
  const [isComplete, setIsComplete] = useState(false);
  const products = useSelector((state) => state.product);
  const [api, contextHolder] = notification.useNotification();
  let totalAmount = 0;

  // complete button controlle
  useEffect(() => {
    if (products.components.length === 5) {
      setIsComplete(true);
    }
  }, [products]);
  // calculation of total amount
  products.components.forEach((product) => {
    totalAmount += Number(product.price.replace(/\,/g, "").replace(/\$/g, ""));
  });
  // notification controller
  const key = "updatable";
  const openNotification = () => {
    api.open({
      key,
      message: "Congratulations!",
      description: "You have a brand new Computer!",
    });
    setTimeout(() => {
      api.open({
        key,
        message: `Wow! Your computer price is ${totalAmount.toFixed(2)}`,
        description: "You should treat us🎈",
      });
    }, 1000);
  };

  return (
    <form className={style.form}>
      {contextHolder}
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
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {totalAmount && (
          <Col>
            <span className={style.totalContainer}>
              Total Amount: ${totalAmount.toFixed(2)}
            </span>
          </Col>
        )}
        <Col>
          <Button
            onClick={openNotification}
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

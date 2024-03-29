import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import style from "./Header.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Header = () => {
  const [current, setCurrent] = useState("/");
  const router = useRouter();
  const items = [
    {
      label: "Home",
      key: "",
    },
    {
      label: "Categories",
      children: [
        {
          label: "CPU / Processor",
          key: "processor",
        },
        {
          label: "Motherboard",
          key: "motherboard",
        },
        {
          label: "RAM",
          key: "ram",
        },
        {
          label: "Power Supply Unit",
          key: "powersupplyunit",
        },
        {
          label: "Storage Device",
          key: "storagedevice",
        },
        {
          label: "Monitor",
          key: "monitor",
        },
        {
          label: "Others",
          key: "others",
        },
      ],
    },
    {
      label: "Build Pc",
      key: "buildpc",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    router.push(`/${e.key}`);
  };

  return (
    <>
      <Head>
        <title>Moner Moto Computer</title>
      </Head>
      <header className={style.header}>
        <Row style={{ width: "98%" }}>
          <Col span={10}>
            <div title="Moner Moto Computer" className={style.logo}>
              <p>M</p>
              <p>M</p>
              <p>C</p>
            </div>
          </Col>
          <Col span={10} offset={2}>
            <Menu
              style={{
                border: "none",
                marginLeft: "auto",
                minWidth: "50vw",
              }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;

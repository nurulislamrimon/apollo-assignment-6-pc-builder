import { Menu } from "antd";
import React, { useState } from "react";
import style from "./Header.module.css";
import { useRouter } from "next/router";

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
    <header className={style.header}>
      <Menu
        style={{
          border: "none",
          minWidth: "100%",
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </header>
  );
};

export default Header;

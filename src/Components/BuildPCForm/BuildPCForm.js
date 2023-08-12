import React from "react";
import style from "./BuildPCForm.module.css";
import EachInput from "./EachInput/EachInput";

const BuildPCForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1>Build Your Personal Computer</h1>
      <EachInput title="CPU / Processor" field="processor" />
      <EachInput title="Motherboard" field="motherboard" />
      <EachInput title="RAM" field="RAM" />
      <EachInput title="Storage Device" field="storageDevice" />
      <EachInput title="Monitor" field="Monitor" />
    </form>
  );
};

export default BuildPCForm;

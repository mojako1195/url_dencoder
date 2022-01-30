import React from "react";
import { PageHeader } from "./components/PageHeader";
import { IOTextArea } from "./components/IOTextArea";
import { RadioButtonComponent } from "./components/RadioButtonComponent";

export const App = () => {
  return (
    <>
      <PageHeader />
      <RadioButtonComponent />
      <IOTextArea />
    </>
  );
};

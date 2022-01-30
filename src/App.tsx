import { memo } from "react";
import { PageHeader } from "./components/PageHeader";
import { IOTextArea } from "./components/IOTextArea";
import { RadioButtonComponent } from "./components/RadioButtonComponent";

export const App = memo(() => {
  return (
    <>
      <PageHeader />
      <RadioButtonComponent />
      <IOTextArea />
    </>
  );
});

import React, { createContext, useState, FC } from "react";

type State = {
  configFlg: string;
  setConfigFlg: React.Dispatch<React.SetStateAction<string>>;
};

export const ConfigFlgContext = createContext({} as State);

export const ConfigFlgProvider: React.FC = (props) => {
  const { children } = props;
  const [configFlg, setConfigFlg] = useState<string>("0");

  return (
    <ConfigFlgContext.Provider value={{ configFlg, setConfigFlg }}>
      {children}
    </ConfigFlgContext.Provider>
  );
};

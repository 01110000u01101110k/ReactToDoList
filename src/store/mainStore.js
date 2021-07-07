import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useMainContext = () => {
  return useContext(Context);
};

export const MainContext = (props) => {
  const [data, setData] = useState([
    { note: 1, isDone: false },
    { note: 2, isDone: false },
  ]);
  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
};

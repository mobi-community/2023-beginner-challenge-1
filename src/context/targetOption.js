import { createContext, useContext, useState } from "react";

const TargetOption = createContext();

export const useTargetOption = () => useContext(TargetOption);

const TargetOptionProvider = ({ children }) => {
  const [targetOption, setTargetOption] = useState(
    localStorage.getItem("key") ? localStorage.getItem("key") : 0
  );
  return (
    <TargetOption.Provider value={{ targetOption, setTargetOption }}>
      {children}
    </TargetOption.Provider>
  );
};

export default TargetOptionProvider;

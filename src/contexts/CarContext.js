import { createContext, useContext, useState } from "react";

const CarContext = createContext(null);

export function CarProvider(props) {
  const [name, setName] = useState("Air Black 2021");
  const [brand, setBrand] = useState("Honda");

  const value = {
    name,
    brand,
    updateName: (nameCar) => setName(nameCar),
    updateBrand: (brandCar) => setBrand(brandCar),
  };

  return (
    <CarContext.Provider value={value}>{props.children}</CarContext.Provider>
  );
}

export function useCarContext() {
  return useContext(CarContext);
}

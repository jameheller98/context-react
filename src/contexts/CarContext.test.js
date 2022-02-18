import { render, screen } from "@testing-library/react";
import React from "react";
import { CarInfo } from "../components/CarInfo";
import { CarContext } from "./CarContext";

describe("Car context", () => {
  it("CarProvider show name and brand of values change", () => {
    const value = {
      name: "Future 150i",
      brand: "Honda",
    };
    const wrapper = ({ children }) => (
      <CarContext.Provider value={value}>{children}</CarContext.Provider>
    );

    render(<CarInfo />, { wrapper });

    expect(screen.getByText(value.name)).toHaveTextContent(value.name);
    expect(screen.getByText(value.brand)).toHaveTextContent(value.brand);
  });
});

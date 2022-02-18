import { render, screen } from "@testing-library/react";
import { CarProvider } from "../contexts/CarContext";
import { CarInfo } from "./CarInfo";

describe("CarInfo component", () => {
  const valueDefault = {
    name: "Air Black 2021",
    brand: "Honda",
  };
  render(
    <CarProvider>
      <CarInfo />
    </CarProvider>
  );

  it("show the name and brand by default", () => {
    expect(screen.getByText(valueDefault.name)).toBeTruthy();
    expect(screen.getByText(valueDefault.brand)).toBeTruthy();
  });
});

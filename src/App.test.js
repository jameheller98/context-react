import { shallow } from "enzyme";
import App from "./App";
import { Car } from "./components/Car";
import { CarProvider } from "./contexts/CarContext";

describe("App component", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it("show the car component", () => {
    expect(wrapped.find(Car).length).toEqual(1);
  });

  it("have wrapper car provider component", () => {
    expect(wrapped.find(CarProvider).length).toEqual(1);
  });

  it("have child components in car provider component", () => {
    expect(wrapped.find(CarProvider).containsMatchingElement(<Car />)).toEqual(
      true
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });
});

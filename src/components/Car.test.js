import { shallow } from "enzyme/build";
import { Car } from "./Car";
import { CarInfo } from "./CarInfo";

describe("Car component", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<Car />);
  });

  it("show the car info component", () => {
    expect(wrapped.find(CarInfo).length).toEqual(1);
  });

  afterEach(() => {
    wrapped.unmount();
  });
});

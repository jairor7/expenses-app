import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../../components/PageNotFound";
import toJSON from "enzyme-to-json";

test("should render PageJNotFound correctly", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

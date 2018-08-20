import NotFoundPage from "../../components/NotFoundPage";
import React from "react";
import { shallow } from "enzyme";

test("should test NotFoundPage", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});

import React from "react";
import Button from "components/Button";
import { shallow, mount } from "enzyme";

describe("Button", () => {
  describe("renders as expected", () => {
    const shallowComponent = shallow(
      <Button>
        <svg className="button__icon" />
        <p className="button__text">hello</p>
      </Button>
    );

    const mountComponent = mount(
      <Button type="button" className="btn">
        <svg className="button__icon" />
        <p className="button__text">hello</p>
      </Button>
    );

    it("renders children as expected", () => {
      expect(shallowComponent.props().children.length).toEqual(2);
    });

    it("receives other props and attributes", () => {
      expect(mountComponent.props().type).toEqual("button");
      expect(mountComponent.hasClass("btn")).toEqual(true);
    });
  });
});

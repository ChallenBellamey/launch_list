import React from "react";
import { getNodeText, fireEvent, render, within } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import _ from "lodash";
import DefaultButton from "./DefaultButton";

const multiple = 3;

const props = {
    icon: (
        <div data-testid="icon" />
    ),
    text: "text",
    onClick: jest.fn(),
};

describe("Renders", () => {
    it("renders button successfully", () => {
        const { queryByTestId } = render(<DefaultButton />);
        const button = queryByTestId("button");
    
        expect(button).toBeTruthy();
    });
    
    it("renders icon successfully", () => {
        const { queryByTestId } = render(<DefaultButton icon={props.icon} />);
        const button = queryByTestId("button");
        let icon: (object | null) = null;
    
        if (button) {
            icon = within(button).getByTestId("icon");
        }
    
        expect(icon).toBeTruthy();
    });
    
    it("renders text correctly", () => {
        const { queryByTestId } = render(<DefaultButton text={props.text} />);
        const button = queryByTestId("button");
        let text: (string | null) = null;

        if (button) {
            text = getNodeText(button);
        }
    
        expect(text).toBeTruthy();
        expect(text).toEqual(props.text);
    });
});

describe("Props", () => {
    it(`calls onClick once per click for ${multiple} clicks`, () => {
        const { queryByTestId } = render(<DefaultButton onClick={props.onClick} />);
        const button = queryByTestId("button");
    
        if (button) {
            _.times(multiple, (time) => {
                fireEvent.click(button);
                expect(props.onClick).toHaveBeenCalledTimes(++time);
            });
        }
    
        expect(props.onClick).toHaveBeenCalledTimes(multiple);
    });
});

describe("Accessibility", () => {
    expect.extend(toHaveNoViolations);

    it("has no violations", async () => {
        const { container } = render(<DefaultButton />);
        const results = await axe(container);
         
        expect(results).toHaveNoViolations();
    });
});

import React from "react";
import { getNodeText, render, within } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import _ from "lodash";
import ReloadButton from "./ReloadButton";

describe("Renders", () => {
    it("renders button successfully", () => {
        const { queryByTestId } = render(<ReloadButton />);
        const button = queryByTestId("button");
    
        expect(button).toBeTruthy();
    });
    
    it("renders icon successfully", () => {
        const { queryByTestId } = render(<ReloadButton />);
        const button = queryByTestId("button");
        let icon: (object | null) = null;
    
        if (button) {
            icon = within(button).getByTestId("icon");
        }
    
        expect(icon).toBeTruthy();
    });
    
    it("renders text correctly", () => {
        const { queryByTestId } = render(<ReloadButton />);
        const button = queryByTestId("button");
        let text: (string | null) = null;

        if (button) {
            text = getNodeText(button);
        }
    
        expect(text).toBeTruthy();
        expect(text).toEqual("Reload Data");
    });
});

describe("Accessibility", () => {
    expect.extend(toHaveNoViolations);

    it("has no violations", async () => {
        const { container } = render(<ReloadButton />);
        const results = await axe(container);
         
        expect(results).toHaveNoViolations();
    });
});

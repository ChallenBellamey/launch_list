import React from "react";
import { fireEvent, getNodeText, render, within } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import _ from "lodash";
import { AppProvider } from "context/AppContext/AppContext";
import SortButton from "./SortButton";

describe("Renders", () => {
    it("renders button successfully", () => {
        const { queryByTestId } = render(<SortButton />);
        const button = queryByTestId("button");
    
        expect(button).toBeTruthy();
    });
    
    it("renders icon successfully", () => {
        const { queryByTestId } = render(<SortButton />);
        const button = queryByTestId("button");
        let icon: (object | null) = null;
    
        if (button) {
            icon = within(button).getByTestId("icon");
        }
    
        expect(icon).toBeTruthy();
    });
});

describe("Context", () => {
    it("renders text correctly", () => {
        const { queryByTestId } = render((
            <AppProvider>
                <SortButton />
            </AppProvider>
        ));

        const button = queryByTestId("button");
        let text: (string | null) = null;

        if (button) {
            text = getNodeText(button);
        }
    
        expect(text).toBeTruthy();
        expect(text).toEqual("Sort Ascending");
    });
    
    it("changes sort on click", () => {
        const { queryByTestId } = render((
            <AppProvider>
                <SortButton />
            </AppProvider>
        ));

        const button = queryByTestId("button");
        let text: (string | null) = null;

        if (button) {
            fireEvent.click(button);
            text = getNodeText(button);
        }
    
        expect(text).toBeTruthy();
        expect(text).toEqual("Sort Descending");
    });
});

describe("Accessibility", () => {
    expect.extend(toHaveNoViolations);

    it("has no violations", async () => {
        const { container } = render(<SortButton />);
        const results = await axe(container);
         
        expect(results).toHaveNoViolations();
    });
});

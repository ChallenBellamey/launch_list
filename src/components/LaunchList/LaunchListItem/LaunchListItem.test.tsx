import React from "react";
import { getNodeText, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import _ from "lodash";
import LaunchListItem from "./LaunchListItem";

const props = {
    launch: {
        date_unix: 0,
        flight_number: 1,
        id: 1,
        name: "Test Launch",
        rocket: "Test Rocket",
    }
};

describe("Renders", () => {
    it("renders item successfully", () => {
        const { queryByTestId } = render(<LaunchListItem launch={props.launch} />);
        const item = queryByTestId("container");
    
        expect(item).toBeTruthy();
    });
    
    it("renders flight number text correctly", () => {
        const { queryByTestId } = render(<LaunchListItem launch={props.launch} />);
        const text = queryByTestId("flightNumber");
        let flightNumber: (string | void);

        if (text) {
            flightNumber = getNodeText(text);
        }
    
        expect(flightNumber).toBeTruthy();
        expect(flightNumber).toEqual(`#${props.launch.flight_number}`);
    });
    
    it("renders name text correctly", () => {
        const { queryByTestId } = render(<LaunchListItem launch={props.launch} />);
        const text = queryByTestId("name");
        let name: (string | void);

        if (text) {
            name = getNodeText(text);
        }
    
        expect(name).toBeTruthy();
        expect(name).toEqual(props.launch.name);
    });
    
    it("renders date text correctly", () => {
        const { queryByTestId } = render(<LaunchListItem launch={props.launch} />);
        const text = queryByTestId("date");
        let date: (string | void);

        if (text) {
            date = getNodeText(text);
        }
    
        expect(date).toBeTruthy();
        expect(date).toEqual("1st Jan 1970");
    });
    
    it("renders rocket text correctly", () => {
        const { queryByTestId } = render(<LaunchListItem launch={props.launch} />);
        const text = queryByTestId("rocket");
        let rocket: (string | void);

        if (text) {
            rocket = getNodeText(text);
        }
    
        expect(rocket).toBeTruthy();
        expect(rocket).toEqual(props.launch.rocket);
    });
});

describe("Accessibility", () => {
    expect.extend(toHaveNoViolations);

    it("has no violations", async () => {
        const { container } = render(<LaunchListItem launch={props.launch} />);
        const results = await axe(container);
         
        expect(results).toHaveNoViolations();
    });
});

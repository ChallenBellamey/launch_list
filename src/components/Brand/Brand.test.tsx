import React from "react";
import { render } from "@testing-library/react";
import Brand from "./Brand";

it("Renders successfully", () => {
    const { queryByTestId } = render(<Brand />);
    const spaceXLogo = queryByTestId("spaceXLogo");
    const title = queryByTestId("title");

    expect(spaceXLogo).toBeTruthy();
    expect(title).toBeTruthy();
});

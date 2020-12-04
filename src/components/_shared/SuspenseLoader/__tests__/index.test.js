/**
 * Tests SuspenseLoader Component
 *
 * @group unit
 */

// React
import React from "react";
// Testing Libs
import { render, screen } from "@testing-library/react";
// Component to Test
import SuspenseLoader from "components/_shared/SuspenseLoader";

describe("SuspenseLoader", () => {
	it("renders without crashing & matches snapshot", () => {
		const { asFragment } = render(<SuspenseLoader />);
		const suspenseLoader = screen.getByRole("progressbar");
		expect(suspenseLoader).toBeVisible();
		expect(asFragment()).toMatchSnapshot();
	});
});

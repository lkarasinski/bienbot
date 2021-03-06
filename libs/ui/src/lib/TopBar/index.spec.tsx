import "@testing-library/jest-dom";

import { renderWithTheme } from "../../utils/renderWithTheme";

import TopBar from "./index";

describe("TopBar", () => {
	it("should render successfully", () => {
		const { baseElement } = renderWithTheme(
			<TopBar serverName="Test Server" serverId="" />
		);
		expect(baseElement).toBeTruthy();
	});
	it("should display short server name", () => {
		const { baseElement } = renderWithTheme(
			<TopBar serverName="TestTestTestTest" serverId="" />
		);
		expect(baseElement).toContainHTML("TestTestTestTest");
	});
	it("should cut off long server name", () => {
		const { baseElement } = renderWithTheme(
			<TopBar serverName="TestTestTestTestTest" serverId="" />
		);
		expect(baseElement).toContainHTML("TestTestTestTe...");
	});
});

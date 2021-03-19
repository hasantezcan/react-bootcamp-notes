import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter bileşen testleri", () => {
	let increaseBtn, decreaseBtn, count;

	beforeEach(() => {
		render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0");
	});

	it("Arttirma butonuna basıldığında sayı bir artmalı", () => {
		userEvent.click(increaseBtn);
		expect(count).toHaveTextContent("1");
	});

	it("Azaltma butonuna basıldığında sayı bir azalmalı", () => {
		userEvent.click(decreaseBtn);
		expect(count).toHaveTextContent("-1");
	});
});

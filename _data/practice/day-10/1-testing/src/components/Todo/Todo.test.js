import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

describe("Todo bileşen testleri", () => {
	let button, input;

	beforeEach(() => {
		render(<Todo />);
		button = screen.getByText("Ekle");
		input = screen.getByLabelText("Title");
	});

	it("Button ve input elemanları sayfaya yüklenmeli", () => {
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	it("Form gönderilince ilgili title listeye eklenmeli", () => {
		const title = "Test Title";
		userEvent.type(input, title);
		userEvent.click(button);

		expect(screen.getByText(title)).toBeInTheDocument();
	});
});

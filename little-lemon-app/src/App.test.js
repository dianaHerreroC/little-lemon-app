import { render, screen } from '@testing-library/react';
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from './BookingPage';

test('renders the BookingForm heading', () => {
  render(<BookingForm/>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes", () => {
  test("should return the correct initial times", () => {
      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  test("should return the same state if no logic is applied", () => {
      const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      const date = {};  // Vacío por ahora, ya que la lógica se añadirá más adelante

      expect(updateTimes(initialState, date)).toEqual(initialState);
  });
});

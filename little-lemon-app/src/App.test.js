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
    const initTimes = initializeTimes();
    expect(Array.isArray(initTimes)).toBe(true);
    expect(initTimes.length).toBeGreaterThan(0);
  });
});

describe("updateTimes", () => {
  test("should return a new state", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const date = {type:"2024-12-25"};
    const avTimes = updateTimes(initialState, date);
    expect(Array.isArray(avTimes)).toBe(true);
    expect(avTimes.length).toBeGreaterThan(0);
    expect(avTimes).not.toEqual(initialState);
  });
});

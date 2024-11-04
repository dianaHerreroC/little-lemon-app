import { render, screen } from '@testing-library/react';
import BookingForm, {validateOccasion, validateTime} from "./BookingForm";
import { initializeTimes, updateTimes } from './BookingPage';

describe("BookingPage functions initializeTimes and updateTimes", () => {
  test("initializeTimes should return the correct initial times", () => {
    const initTimes = initializeTimes();
    expect(Array.isArray(initTimes)).toBe(true);
    expect(initTimes.length).toBeGreaterThan(0);
  });
  test("updateTimes should return a new state", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const date = {type:"2024-12-25"};
    const avTimes = updateTimes(initialState, date);
    expect(Array.isArray(avTimes)).toBe(true);
    expect(avTimes.length).toBeGreaterThan(0);
    expect(avTimes).not.toEqual(initialState);
  });
});

describe("BookingForm", () => {
  test('renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
  });
  test("renders the date input with correct attributes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    expect(dateInput).toHaveAttribute("name", "Date");
    expect(dateInput).toHaveAttribute("min", new Date().toISOString().split("T")[0]);
  });
  test("renders the time select with correct attributes", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toHaveAttribute("id", "time");
    expect(timeSelect).toHaveAttribute("aria-invalid", "false");
    expect(timeSelect).toHaveClass("correctField"); // Suponiendo que no hay error inicial
  });
  test("renders the guests input with correct attributes", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("id", "guests");
    expect(guestsInput).toHaveAttribute("name", "Guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
  test("renders the occasion select with correct attributes", () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("id", "occasion");
    expect(occasionSelect).toHaveAttribute("aria-invalid", "false");
    expect(occasionSelect).toHaveClass("correctField"); // Suponiendo que no hay error inicial
  });
});

describe("BookingForm validation functions", () => {
  test("validateTime should return true for valid time", () => {
      expect(validateTime("12:00")).toBe(true);
      expect(validateTime("18:30")).toBe(true);
  });

  test("validateTime should return false for invalid time", () => {
      expect(validateTime("")).toBe(false);
      expect(validateTime(null)).toBe(false);
      expect(validateTime(undefined)).toBe(false);
  });

  test("validateOccasion should return true for valid occasion", () => {
      expect(validateOccasion("Birthday")).toBe(true);
      expect(validateOccasion("Anniversary")).toBe(true);
  });

  test("validateOccasion should return false for invalid occasion", () => {
      expect(validateOccasion("")).toBe(false);
      expect(validateOccasion(null)).toBe(false);
      expect(validateOccasion(undefined)).toBe(false);
  });
});

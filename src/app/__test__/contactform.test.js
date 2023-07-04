import { render, fireEvent } from '@testing-library/react';
import React from "react";
import ContactForm from '../components/ContactForm';

test('submits form data to the API endpoint', () => {
  // Mock the fetch function
  const mockFetch = jest.fn();

  // Mock the fetch implementation
  global.fetch = mockFetch;

  // Render the ContactForm component
  const { getByTestId } = render(<ContactForm />);

  // Get the form element by its test ID
  const formElement = getByTestId('contact-form');

  // Fill in the form fields (example: username, email, phone, message)
  fireEvent.change(getByLabelText(/Enter your name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
  fireEvent.change(getByLabelText(/Message/i), { target: { value: 'Test message' } });

  // Submit the form
  fireEvent.submit(formElement);

  // Verify that the fetch function was called with the correct data
  expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Test message',
    }),
  });
});

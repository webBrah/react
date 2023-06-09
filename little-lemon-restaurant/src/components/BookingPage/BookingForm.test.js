import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );

    const firstNameInput = screen.getByLabelText('First Name:');
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByLabelText('Last Name:');
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email:');
    expect(emailInput).toBeInTheDocument();

    const phoneInput = screen.getByLabelText('Phone:');
    expect(phoneInput).toBeInTheDocument();

    const numPeopleInput = screen.getByLabelText('Number of People:');
    expect(numPeopleInput).toBeInTheDocument();

    const dateInput = screen.getByLabelText('Date:');
    expect(dateInput).toBeInTheDocument();

    const timeSelect = screen.getByLabelText('Time:');
    expect(timeSelect).toBeInTheDocument();

    const occasionSelect = screen.getByLabelText('Occasion:');
    expect(occasionSelect).toBeInTheDocument();

    const seatingSelect = screen.getByLabelText('Seating Preference:');
    expect(seatingSelect).toBeInTheDocument();

    const commentsTextArea = screen.getByLabelText('Comments:');
    expect(commentsTextArea).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('submits the form without validation errors', async () => {
    render(
      <Router>
        <BookingForm />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('First Name:'), {
      target: { value: 'John' },
    });

    fireEvent.change(screen.getByLabelText('Last Name:'), {
      target: { value: 'Doe' },
    });

    fireEvent.change(screen.getByLabelText('Email:'), {
      target: { value: 'john.doe@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Phone:'), {
      target: { value: '555-555-5555' },
    });

    fireEvent.change(screen.getByLabelText('Number of People:'), {
      target: { value: '3' },
    });

    fireEvent.change(screen.getByLabelText('Date:'), {
      target: { value: '2023-05-15' },
    });

    fireEvent.change(screen.getByLabelText('Time:'), {
      target: { value: '19:00' },
    });

    fireEvent.change(screen.getByLabelText('Occasion:'), {
      target: { value: 'Birthday' },
    });

    fireEvent.change(screen.getByLabelText('Seating Preference:'), {
      target: { value: 'Indoor' },
    });

    fireEvent.change(screen.getByLabelText('Comments:'), {
      target: { value: 'A table near the window, please.' },
    });

    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    // Replace this with your own assertion
    expect(window.location.pathname).toEqual('/confirmation');
  });
});

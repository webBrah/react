import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import BookingForm from '../BookingPage/BookingForm';
// import './Reservations.css';

export default function Reservations() {
  return (
    <>
      <PageTemplate pageTitle="Reservations" />;
      <div className="reservations-form-container">
        <BookingForm />
      </div>
    </>
  );
}

import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import ReservationForm from '../BookingPage/BookingForm';

export default function Reservations() {
  return (
    <>
      <PageTemplate pageTitle="Reservations" />;
      <ReservationForm />
    </>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BookingPage/BookingForm.css';

function BookingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [occasion, setOccasion] = useState('None');
  const [seating, setSeating] = useState('None');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNumPeopleChange = (event) => {
    setNumPeople(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSeatingChange = (event) => {
    setSeating(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!firstName) {
      validationErrors.firstName = 'Please enter your first name';
    }
    if (!lastName) {
      validationErrors.lastName = 'Please enter your last name';
    }
    if (!email) {
      validationErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (!phone) {
      validationErrors.phone = 'Please enter your phone number';
    } else if (!/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(phone)) {
      validationErrors.phone = 'Please enter a valid phone number';
    }
    if (!numPeople) {
      validationErrors.numPeople = 'Please enter the number of people';
    } else if (numPeople < 1) {
      validationErrors.numPeople = 'Please enter a valid number of people';
    }
    if (!date) {
      validationErrors.date = 'Please select a date';
    }
    if (!time) {
      validationErrors.time = 'Please select a time';
    }
    if (!seating || seating === 'None') {
      validationErrors.seating = 'Please select a seating option';
    }
    if (!occasion || occasion === 'None') {
      validationErrors.occasion = 'Please select an occasion';
    }

    if (!seating || seating === 'None') {
      validationErrors.seating = 'Please select a seating option';
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Add logic to submit form data to an API or backend server
      console.log('Form submitted!');
      navigate('/confirmation');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        maxWidth: '500px',
        gap: '20px',
        margin: '0 auto',
      }}
    >
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      {errors.firstName && <div className="error">{errors.firstName}</div>}
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      {errors.lastName && <div className="error">{errors.lastName}</div>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <label htmlFor="phone">Phone number</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="(xxx)xxxx-xxxx"
      />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <label htmlFor="num-people">Number of People</label>
      <input
        type="number"
        id="num-people"
        value={numPeople}
        onChange={handleNumPeopleChange}
      />
      {errors.numPeople && <div className="error">{errors.numPeople}</div>}

      <label htmlFor="res-date">Select Date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      {errors.date && <div className="error">{errors.date}</div>}

      <label htmlFor="res-time">Select Time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      {errors.time && <div className="error">{errors.time}</div>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>

      <label htmlFor="seating">Seating Options</label>
      <select id="seating" value={seating} onChange={handleSeatingChange}>
        <option>None</option>
        <option>Indoors</option>
        <option>Outdoors (Patio)</option>
        <option>Outdoors (Sidewalk)</option>
      </select>
      {errors.seating && <div className="error">{errors.seating}</div>}

      <label htmlFor="comments">Additional Comments</label>
      <textarea
        id="comments"
        value={comments}
        onChange={handleCommentsChange}
        placeholder="Additional comments"
      ></textarea>
      <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
        Note: You cannot edit your reservation after submission. Please
        double-check your answer before submitting your reservation request.
      </p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;

import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BookingPage/BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numPeople: '',
    date: '',
    time: '17:00',
    occasion: 'None',
    seating: 'None',
    comments: '',
  });

  const [isDirty, setIsDirty] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const navigate = useNavigate();

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== '');
    const hasEmptyRequiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'numPeople',
      'date',
    ].some((field) => formData[field] === '');

    setIsFormValid(!hasErrors && !hasEmptyRequiredFields);
  }, [formData, errors]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, []);

  const handleFocus = useCallback((event) => {
    setIsDirty((prevIsDirty) => ({
      ...prevIsDirty,
      [event.target.name]: true,
    }));
  }, []);

  const handleBlur = useCallback(
    (event) => {
      const { name, value, required } = event.target;
      if (isDirty[name] && required && value === '') {
        const label = event.target.labels[0].textContent;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: `${label} is a required field!`,
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      }
    },
    [isDirty]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted!');
      navigate('/confirmation');
    }
  };

  return (
    <div className="booking-form">
      <div className="form-container">
        <h2>Book a table</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name field */}
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          {/* Last Name field */}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          {/* Email field */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          {/* Phone field */}
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          {/* Number of People field */}
          <label htmlFor="numPeople">Number of People:</label>
          <input
            type="number"
            id="numPeople"
            name="numPeople"
            min="1"
            value={formData.numPeople}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.numPeople && <p className="error">{errors.numPeople}</p>}

          {/* Date field */}
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          {errors.date && <p className="error">{errors.date}</p>}

          {/* Time field */}
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <p className="error">{errors.time}</p>}

          {/* Occasion field */}
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="None">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>

          {/* Seating Preference field */}
          <label htmlFor="seating">Seating Preference:</label>
          <select
            id="seating"
            name="seating"
            value={formData.seating}
            onChange={handleChange}
          >
            <option value="None">None</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Window">Window</option>
            <option value="Bar">Bar</option>
          </select>

          {/* Comments field */}
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="5"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>

          {/* Submit button */}
          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;

import { useState } from "react";

function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [occasion, setOccasion] = useState("None");
  const [seating, setSeating] = useState("None");
  const [comments, setComments] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

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
    // Add logic to submit form data to an API or backend server
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "500px", gap: "20px", margin: "0 auto" }}>
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" value={firstName} onChange={handleFirstNameChange} />
  
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" value={lastName} onChange={handleLastNameChange} />
  
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
  
      <label htmlFor="phone">Phone number</label>
      <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} placeholder="(xxx)xxxx-xxxx" />
  
      <label htmlFor="num-people">Number of People</label>
      <input type="number" id="num-people" value={numPeople} onChange={handleNumPeopleChange} />
  
      <label htmlFor="res-date">Select Date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
  
      <label htmlFor="res-time">Select Time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
  
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

  <label htmlFor="comments">Additional Comments</label>
  <textarea id="comments" value={comments} onChange={handleCommentsChange} placeholder="Additional comments"></textarea>
  <p style={{ fontSize: "14px", fontStyle: "italic" }}>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p>

  <button type="submit">Submit</button>
</form>
 );
}

export default BookingForm;
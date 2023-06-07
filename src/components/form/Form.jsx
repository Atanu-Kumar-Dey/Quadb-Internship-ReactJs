import React, { useState } from "react";
import { setShowForm } from "../../store/showSlice";
import { useDispatch } from "react-redux";
import "./style.scss";
const Form = ({ movieName }) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultTickets, setAdultTickets] = useState(null);
  const [childTickets, setChildTickets] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setLocalStorage = (
    date,
    time,
    adultNum,
    childNum,
    email,
    firstName,
    lastName
  ) => {
    const userdata = [
      {
        date: { date },
        time: { time },
        adult: { adultNum },
        child: { childNum },
        email: { email },
        fname: { firstName },
        lname: { lastName },
      },
    ];
    const jsonData = JSON.stringify(userdata);
    localStorage.setItem("userData", jsonData);
  };

  function dataRetrive() {
    if (localStorage.getItem("userData") !== null) {
      const retrievedData = localStorage.getItem("userData");

      // Convert the JSON string back to an array of objects
      const parsedData = JSON.parse(retrievedData);

      // Access and use the data
      parsedData.map((item) => {
        console.log("Date: " + item.date.date + ", Time: " + item.time);
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adultTickets < 0 || childTickets < 0) {
      return;
    } else {
      dispatch(setShowForm());
      setLocalStorage(
        date,
        time,
        adultTickets,
        childTickets,
        email,
        firstName,
        lastName
      );
      dataRetrive();
      console.log("Form submitted");
    }
  };

  return (
    <div className="overlay">
      <div className="movie-ticket-form">
        <form onSubmit={handleSubmit}>
          <h2>Book Movie Ticket</h2>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="movieName" className="column-label">
                Movie Name:
              </label>
              <input type="text" id="movieName" value={movieName} disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-column">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="adultTickets">Adult Tickets</label>
              <input
                type="number"
                id="adultTickets"
                placeholder="0"
                value={adultTickets}
                onChange={(e) => setAdultTickets(e.target.value)}
              />
            </div>
            <div className="form-column">
              <label htmlFor="childTickets">Child Tickets</label>
              <input
                type="number"
                id="childTickets"
                placeholder="0"
                value={childTickets}
                onChange={(e) => setChildTickets(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="movieName" className="column-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="reservationName" className="column-label">
                Reservation Name
              </label>
              <div className="reserve">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

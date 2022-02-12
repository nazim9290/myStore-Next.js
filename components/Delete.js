import React from "react";

const Delete = () => {
  return (
    <div>
      <form className="new-event-form">
        {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
        <label>
          <span>Event Title:</span>
          <input type="text" />
        </label>
        <label>
          <span>Event Date:</span>
          <input type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Delete;

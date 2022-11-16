import "./FormStyles.css";

import React from "react";
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Form = () => {
  return (
    <div className="form">
      <form
        method="POST"
        action="https://getform.io/f/89e0d57c-eee5-4446-893e-cda0ca4d0035"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" required />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="type your message here"
          name="msg"
          required
        />
        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default Form;

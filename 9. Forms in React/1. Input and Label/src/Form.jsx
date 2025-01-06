import { useState } from "react";

function Form() {
  let [firstName, setFirstName] = useState("");
  // console.log(firstName);

  let [lastName, setLastName] = useState("");
  // console.log(firstName + " " + lastName);

  let handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  let handleLastName = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h1>Form</h1>
      <form action="">
        <label htmlFor="firstName">Full Name - </label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={handleFirstName}
        />
        &nbsp; &nbsp;
        <label htmlFor="lastName">Last Name - </label>
        <input
          id="enter last name here"
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={handleLastName}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
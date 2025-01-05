import { useState } from "react";

function Form() {
  let [fullName, setFullName] = useState("");
  console.log(fullName);

  let handleName = (event) => {
    // console.log(event);

    setFullName(event.target.value);
  };

  return (
    <>
      <h1>Form</h1>
      <form action="">
        <input
          type="text"
          placeholder="Hello"
          value={fullName}
          onChange={handleName}
        />
        &nbsp;
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;

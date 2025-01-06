import { useState } from "react";
import Inputs from "./Inputs";

function Form() {
  let [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: ""
  });

  //   console.log(form);

  //   let handleInput = (event) => {
  //     setForm(event.target.value);
  //   };

  let handleForm = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    setForm((currData) => {
      // console.log(currData);
    //   currData[fieldName] = fieldValue;
      return { ...currData, [fieldName]: fieldValue };
    });
  };

  let handleSubmit = (event) => {
    console.log(form);

    event.preventDefault(); //this will not allow to disable the values from inputs after clicking submit.
  };

  return (
    <>
      <form onSubmit={handleSubmit}> 
        <Inputs
          type={"text"}
          name={"firstName"}
          id={"firstName"}
          htmlFor={"firstName"}
          value={form.firstName}
          onChange={handleForm}
          label={"First Name"}
          placeHolder={"Enter First Name Here"}
        />
        <br />
        <br />
        <Inputs
          type={"text"}
          name={"lastName"}
          id={"lastName"}
          htmlFor={"lastName"}
          value={form.lastName}
          onChange={handleForm}
          label={"LastName"}
          placeHolder={"Enter Last Name"}
        />
        <br />
        <br />
        <Inputs
          type={"password"}
          name={"password"}
          id={"password"}
          htmlFor={"password"}
          value={form.password}
          onChange={handleForm}
          label={"password"}
          placeHolder={"Enter Password"}
        />
        <br />
        <br />
        <button >Submit</button>
      </form>
    </>
  );
}

export default Form;

import { useState } from "react";
import Form from "./Form";

function Comments() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });

  let handleFormData = (event) => {
    setFormData((data) => {
      return { ...data, [event.target.name]: event.target.value };
    });
  };

  let form = () => {
    console.log(formData);
  }

  let submit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Form form={formData} method={handleFormData} clickMethod={form} submitMethod={submit}/>
    </>
  );
}

export default Comments;

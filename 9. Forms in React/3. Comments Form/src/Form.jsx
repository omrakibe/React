import Inputs from "./Inputs";
import Button from "./Button";

function Form({form, method, clickMethod, submitMethod}) {
    return(
        <form onSubmit={submitMethod}>
        <Inputs
          type={"text"}
          name={"username"}
          id={"username"}
          placeHolder={"Enter Username"}
          label={"Username"}
          htmlFor={"username"}
          value={form.username}
          onChange={method}
        />
        <br />
        <br />
        <Inputs
          type={"text"}
          name={"remark"}
          id={"remark"}
          placeHolder={"Give valid Remark"}
          label={"Remark"}
          htmlFor={"remark"}
          value={form.remark}
          onChange={method}
        />
        <br />
        <br />
        <Inputs
          type={"number"}
          name={"rating"}
          id={"rating"}
          placeHolder={"Enter Rating"}
          label={"Rating"}
          htmlFor={"rating"}
          value={form.rating}
          onChange={method}
        />
        <br />
        <br />
        <Button buttonName={"Submit"} clickMethod={clickMethod}/>
      </form>
    )
}
export default Form;
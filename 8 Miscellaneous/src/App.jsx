import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }
  return (
    <>
      <Lottery n={5} winCondition={winCondition}/>
    </>
  );
}

export default App;

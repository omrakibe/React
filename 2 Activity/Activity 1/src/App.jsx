import "./App.css";
import { User } from "./User.jsx";

function App() {
  return (
    <div>
      <User userName="Om" textColor="orange" />
      <User userName="Tejas" textColor="Blue"/>
      <User userName="Ashish" textColor="green"/>
    </div>
  );
}

export default App;

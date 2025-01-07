import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  let click = () => {
    console.log("Hello World");
    
  }
  return (
    <>
      <h1>Material UI</h1>
      <Button variant="contained" onClick={click} startIcon={<DeleteIcon />}>Click me!!</Button>
      <Button variant="contained" size="small" color="success">
          Small
        </Button>
    </>
  );
}

export default App;

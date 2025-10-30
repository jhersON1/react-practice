import "./App.css";
import { Button, ColorRed } from "./components";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const dimeHola = () => {
    alert("Hola!");
  }

  return (
    <>
      <ColorRed><Button parentMethod={dimeHola}>Mi boton Rojo</Button></ColorRed>
      <Button parentMethod={handleClick}>Mi boton normal</Button>
      {/* <Button parentMethod={handleClick}>
        <ColorRed><div>My label</div></ColorRed>
      </Button> */}
    </>
  );
}

export default App;

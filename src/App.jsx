import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MobilesList } from "./MobilesList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function App() {
  const [count, setCount] = useState(0);
  const [click, setClick]= useState(false)
  return (
    <div className="App">
      <div className="mobilelist">
        <Navbar click={click} setClick={setClick} />
        <MobilesList click={click} setClick={setClick}/>
      </div>
    </div>
  );
}

function Navbar(click, setClick) {
  
  return (
      <AppBar position="static">
        <Toolbar> 
        <Button color="inherit"><ShoppingCartIcon/>Cart</Button>
        </Toolbar>
      </AppBar>
  );
}


export default App;

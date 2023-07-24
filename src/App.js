import "./App.css";
import RouteCompo from "./Handson4/RouteCompo";
import { BrowserRouter } from "react-router-dom";
import LinkCompo from "./Handson4/LinkCompo";

function App() {
  return (
    <>
      <BrowserRouter>
        <LinkCompo />
        <RouteCompo />
      </BrowserRouter>
    </>
  );
}

export default App;

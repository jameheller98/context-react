import "./App.css";
import { Car } from "./components/Car";
import { CarProvider } from "./contexts/CarContext";

function App() {
  return (
    <CarProvider>
      <div className="App">
        <Car />
      </div>
    </CarProvider>
  );
}

export default App;

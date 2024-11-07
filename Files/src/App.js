import "./App.css";
import { RadioGroup, RadioOption } from "./Radio"; // Asegúrate de que la ruta sea correcta
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    alert(`You selected: ${selected}`); // Muestra el valor seleccionado en un alert
  };

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <form onSubmit={handleSubmit}> {/* Añade onSubmit al formulario */}
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button type="submit" disabled={!selected}>Submit</button>
      </form>
    </div>
  );
}

export default App;

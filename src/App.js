import { useState } from 'react';
import './App.css';
const MinutesToHours = () => {
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [isFlipped, setIsFlipped] = useState(false);


  const handleMinutesChange = (e) => {
    const min = e.target.value;
    setMinutes(min);
    setHours(min / 60);
  };

  const handleHoursChange = (e) => {
    const hr = e.target.value;
    setHours(hr);
    setMinutes(hr * 60);
  };

  const handleReset = () => {
    setMinutes("");
    setHours("");
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    handleReset();
  };

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          placeholder="Minutes"
          value={isFlipped ? minutes : hours}
          onChange={isFlipped ? handleMinutesChange : handleHoursChange}
          disabled={isFlipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          placeholder="Hours"
          value={isFlipped ? hours : minutes}
          onChange={isFlipped ? handleHoursChange : handleMinutesChange}
          disabled={!isFlipped}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFlip}>Flip</button>
    </div>
  )
};
function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}
export default App;
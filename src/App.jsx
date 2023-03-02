import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountdown from "./hooks/useCountdown";
import NewYear from "./assets/newyear.jpg";
import "./App.css";

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00");

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter number={day} title="Dias" />
          <Counter number={hour} title="Horas" />
          <Counter number={minute} title="Minutos" />
          <Counter number={second} title="Segundos" />
        </div>
      </div>
    </div>
  );
}

export default App;

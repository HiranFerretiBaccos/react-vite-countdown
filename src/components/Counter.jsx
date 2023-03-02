import "./Counter.css";

const Counter = ({ number, title }) => {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
};

export default Counter;

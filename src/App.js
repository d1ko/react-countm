import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddQuantity = () => {
    if (quantity) setCount(count + parseInt(quantity, 10));
    setQuantity('');
  };

  return (
      <div className={"container"}>
        <div className={"content"}>
          <p>count: {count}</p>
          <h3>increase the counter</h3>
          <hr />
        </div>
        <div className={"form"}>
          <input
            type="number"
            value={quantity}
            className="in"
            onChange={handleOnChange}
          />
          <button className={"icon"} onClick={handleAddQuantity}>
            
          </button>
        </div>
      </div>
  );
  };


export default App;

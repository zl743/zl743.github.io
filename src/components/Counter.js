import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.querySelector('.count-text').innerHTML = `count is uhh  ${count}`
  })
  return (
    <div>
      hi
      <p className="count-text"></p>
      <button
        onClick={() => {
          count == 0 ? setCount(count + 1) : setCount(count + count);
        }}
      >
        button
      </button>
    </div>
  );
};
export default Counter;

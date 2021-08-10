import * as React from "react";

console.clear();

function Counter() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((s) => s + 2);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+increment</button>
    </div>
  );
}

export default Counter;

// First repeat character [“a”, “b“, “d”, “d”]

// function findChar(arr) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       return arr[i];
//     } else {
//       map.set(arr[i], 1);
//     }
//   }
//   return false;
// }

// console.log(findChar(["a", "b", "d", "d"]));
// console.log(findChar(["a", "b", "c", "d"]));
// console.log(findChar(["a", "b", "a", "c", "d"]));
// console.log(findChar(["a", "b", "a", "c", "d"]));

/**
 * 3. Counter
 *
 * My counter component has a side-effect.
 * I don't want the "Increment count B" button to increment the countA variable.
 */

import { useState } from "react";

const Counter = () => {
  const [countA, setCountA] = useState<number>(10);
  const [countB, setCountB] = useState<number>(0);

  return (
    <div
      onClick={() => {
        setCountA(countA + 1);
      }}
    >
      <h1>My Counter 3</h1>
      <pre>countA: {countA}</pre>
      <pre>countB: {countB}</pre>
      <div>
        <button
          onClick={() => {
            setCountB(countB + 1);
          }}
        >
          Increment count B
        </button>
      </div>
    </div>
  );
};

export default Counter;

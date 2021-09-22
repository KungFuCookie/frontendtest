/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import React, { FC, useState, Dispatch, SetStateAction } from "react";

const IncremenButton: FC<{ count: number, setCount: Dispatch<SetStateAction<number>> }> = ({ count, setCount }) => {

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Increment
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton count={count} setCount={setCount} />
    </div>
  );
};

export default Counter;

/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import { FC, useState } from "react";

const IncremenButton: FC<{ count: number }> = ({ count }) => {
  const [savedCount, setSavedCount] = useState<number>(count);

  return (
    <button
      onClick={() => {
        setSavedCount(savedCount + 1);
      }}
    >
      Increment
    </button>
  );
};

const Counter = () => {
  const [count] = useState<number>(0);

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton count={count} />
    </div>
  );
};

export default Counter;

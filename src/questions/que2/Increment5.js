import React, { useState } from 'react';

function IncrementDialog() {
  const [count, setCount] = useState(10);

  return (
    <div className="ind-container">
      <h4>The number is: {count}</h4>
      <button className="add-btn" onClick={() => setCount(count + 5)}>
        Add 5
      </button>
    </div>
  );
}

export default IncrementDialog;

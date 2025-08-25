import React, { useState } from 'react';

function LoifsEngine() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <button onClick={() => setResult(Math.random())}>
        Evaluate
      </button>
      {result !== null && (
        <div className="result">
          <p>Estimated Reliability Score: {result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default LoifsEngine;
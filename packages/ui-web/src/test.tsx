import React from "react";

function Test() {
  const values: object[] = [];
  return (
    <h1>
      Test
      {values.map((value, i) => (
        <h2 key={i}>Test</h2>
      ))}
    </h1>
  );
}

export default Test;

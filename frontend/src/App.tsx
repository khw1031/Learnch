import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { css } from "@emotion/core";

function App() {
  const [name, setName] = useState("kim");
  return (
    <div
      css={css`
        background: blue;
        font-size: 2rem;
      `}
    >
      hi!: {name}
      <input type="text" onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default hot(App);

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html {
  font-size: 87.5%;
}

body {
  background: var(--color-background);
  color: var(--color-text);
}

a {
  color: var(--color-secondary);
}

`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

  html, body, #root {
    font-family: 'Prompt', sans-serif;
    scroll-behavior:smooth;
  }  
  
`
export default GlobalStyle

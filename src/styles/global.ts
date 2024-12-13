'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; // 1rem = 10px
  }
  html, body, #__next {
    height: 100vh;
  }

  body {
    font-family:  -apple-system, Roboto, sans-serif;
  }
`

export default GlobalStyle

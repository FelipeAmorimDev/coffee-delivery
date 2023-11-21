import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, textarea, button{
    ${mixins.fonts.textM}
  }
  
  ul{
    list-style: none;
  }
`

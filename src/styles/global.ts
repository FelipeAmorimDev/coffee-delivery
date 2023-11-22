import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

   input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
        display: none;
      }
  :focus{
    outline: none;
    box-shadow: 0 0 0 1px #C47F17;
    border-radius: 6px;
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

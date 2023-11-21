import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ItemQuantityContainer = styled.div`
  padding: 5.5px 8px;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  ${mixins.fonts.textM}

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-items: center;
    border: 0;
    cursor: pointer;
    svg {
      transition: 0.25s !important;
    }
    &:hover svg {
      fill: ${(props) => props.theme['purple-dark']};
    }
  }
`

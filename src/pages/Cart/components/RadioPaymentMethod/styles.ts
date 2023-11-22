import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const RadioInputContainer = styled.div`
  position: relative;
  padding: 16px 19.67px 16px 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  min-width: 178px;

  ${mixins.fonts.buttonM}
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  label {
    display: flex;
    align-items: center;
    justify-items: center;
  }

  input[type='radio'] {
    position: absolute;
    top: 0;
    left: 0;
    appearance: none;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: 0.3s;

    + input[type='radio'] {
      margin-left: 12px;
    }

    &:checked {
      border: 1px solid var(--brand-purple, #8047f8);
      background: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
    }
  }

  svg {
    margin-right: 12px;
  }
`

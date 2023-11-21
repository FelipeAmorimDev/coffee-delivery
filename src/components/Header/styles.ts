import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  max-width: calc(1120px + 32px);
  margin: 0 auto;
  padding: 32px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Aside = styled.div`
  display: flex;
  gap: 12px;

  > div {
    padding: 10px 8px;
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['purple-dark']};
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
  }
`

export const CartButton = styled.button`
  height: 38px;
  width: 38px;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CartFeedback = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -8.35px;
  ${mixins.fonts.textXS}
`

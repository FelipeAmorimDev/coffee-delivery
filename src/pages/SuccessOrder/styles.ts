import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessOrderContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 102px;
  margin-top: 80px;
  align-items: end;
  > div > div {
    width: 100%;
    border: 3px solid;
    border-radius: 6px 36px;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
    overflow: hidden;
  }

  ul {
    padding: 40px;
    width: 100%;
    background: white;
  }

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']};
  }
  > div > p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 40px;
  }
`

export const DeliveryInfoItem = styled.li`
  display: flex;

  gap: 12px;
  + li {
    margin-top: 32px;
  }
`

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: ${(props) => props.theme.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DataContainer = styled.div`
  p {
    color: ${(props) => props.theme['base-text']};
  }
`

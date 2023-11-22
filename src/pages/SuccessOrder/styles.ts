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

  ul {
    margin-top: 40px;
    padding: 40px;
    border-radius: 6px 36px;
    border: 1px solid #dbac2c;
  }

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']};
  }
  > p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-subtitle']};
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

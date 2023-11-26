import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.section`
  max-width: calc(1120px + 32px);
  margin: 0 auto;
  padding: 40px 16px 0px;
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 32px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const CompleteOrderContainer = styled.div`
  padding: 40px;
  > span {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
    display: inline-block;
  }

  @media (max-width: 660px) {
    padding: 10px;
  }
`
export const CartListContainer = styled.div`
  padding: 40px;
  > span {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
    display: inline-block;
  }
  > button {
    ${mixins.fonts.buttonG}
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    margin-top: 36px;
    cursor: pointer;
    transition: 0.2s;
    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  @media (max-width: 660px) {
    padding: 10px;
  }
`
export const CartList = styled.ul`
  li {
    padding: 8px 4px;
    display: flex;
    justify-content: space-between;

    img {
      width: 64px;
      margin-right: 20px;
    }

    > span {
      ${mixins.fonts.textM}
      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const CartItemHeader = styled.div`
  display: flex;
`

export const CartItemHeaderContainer = styled.div`
  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    > button {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px;
      ${mixins.fonts.buttonM}
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: 0;
      border-radius: 6px;
      cursor: pointer;
    }
  }
`
export const CartItemSeparator = styled.div`
  width: 100%;
  height: 2px;
  margin: 24px 0px;
  background: ${(props) => props.theme['base-button']};
`

export const PriceContainer = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    ${mixins.fonts.textS};
    color: ${(props) => props.theme['base-text']};
    margin-top: 48px;

    &:last-of-type {
      ${mixins.fonts.textL}
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    + p {
      margin-top: 12px;
    }
  }
`

export const FormLabel = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  > div {
    display: flex;
    flex-direction: column;

    span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-subtitle']};
      &:last-of-type {
        ${mixins.fonts.textS}
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 80px;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 92px;

  input {
    display: block;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid var(--base-button, #e6e5e5);
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    ${mixins.fonts.textS}
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    &:placeholder-shown {
      background-color: ${(props) => props.theme['base-button']};
    }

    + input {
      margin-top: 16px;
    }
  }

  #zip {
    grid-area: cep;
  }

  #address {
    grid-area: street;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: fullAddress;
    margin-left: 12px;
    @media (max-width: 660px) {
      margin-left: 0;
    }
  }

  #neighborhood {
    grid-area: neighborhood;
  }

  #city {
    grid-area: city;
    margin-left: 12px;
    margin-right: 12px;
    @media (max-width: 660px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  #state {
    grid-area: state;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'cep'
      'street'
      'number'
      'fullAddress'
      'neighborhood'
      'city'
      'state';
  }
`
export const PaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 12px;
`

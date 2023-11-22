import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.section`
  max-width: calc(1120px + 32px);
  margin: 0 auto;
  padding: 40px 16px 0px;
  display: grid;
  grid-template-columns: 7fr auto;
  gap: 32px;
`

export const CompleteOrderContainer = styled.div`
  padding: 40px;
  > span {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
    display: inline-block;
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
  }
`
export const CartList = styled.ul`
  li {
    padding: 8px 4px;
    display: flex;

    > div {
      margin-right: 50px;

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
    }

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
  display: flex;
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
  }

  #address,
  #city,
  #complement {
    flex: 1;
  }

  #state {
    max-width: 60px;
  }

  > input {
    &:first-of-type {
      margin-bottom: 16px;
    }
  }

  div {
    display: flex;
    gap: 12px;
    margin-top: 16px;

    /* &:first-of-type {
      > input {
        &:last-of-type {
          flex: 1;
        }
      }
    } */
  }
`
export const PaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

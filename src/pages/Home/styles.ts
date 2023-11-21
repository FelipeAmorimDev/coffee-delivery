import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.div`
  max-width: calc(1120px + 32px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 56px;
  padding: 92px 16px;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 16px;
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 66px;
  }
`
export const HeroBg = styled.section`
  background-image: url('./images/hero-bg.svg');
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
`

export const BenefityList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 40px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
  }
`

interface BenefityIconProps {
  $backgroundIcon: string
}

export const BenefityIcon = styled.div<BenefityIconProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.$backgroundIcon};
`
export const ShopContainer = styled.section`
  max-width: calc(1120px + 32px);
  margin: 32px auto 157px auto;
  padding: 0 16px;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 54px;
  }
`
export const ShopList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 256px);
  gap: 40px 32px;

  li {
    text-align: center;

    > img {
      margin-bottom: 12px;
    }

    > h3 {
      margin-bottom: 8px;
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme['base-subtitle']};
    }

    > p {
      max-width: 30ch;
      margin: 0 auto 33px auto;
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-label']};
    }

    > div:last-child {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme['base-text']};

      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        ${mixins.fonts.titleM}
        margin: 0 23px 0 5px;
      }
    }
  }
`
export const AddToCartButton = styled.button`
  border: 0;
  width: 38px;
  height: 38px;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme.purple};
  }
  cursor: pointer;
`
export const AddToCartOptions = styled.div`
  display: flex;
  gap: 8px;
`
export const CoffeeTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 16px;
  span {
    max-width: 81px;
    display: block;
    padding: 4px 8px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    ${mixins.fonts.tag}
  }
`

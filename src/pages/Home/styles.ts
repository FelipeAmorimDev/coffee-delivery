import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeroContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 56px;
  padding: 92px 0px;

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

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { BenefityIcon, BenefityList, HeroBg, HeroContainer } from './styles'

export function Home() {
  return (
    <main>
      <HeroBg>
        <HeroContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <BenefityList>
              <li>
                <BenefityIcon $backgroundIcon="#C47F17">
                  <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
                </BenefityIcon>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <BenefityIcon $backgroundIcon="#574F4D">
                  <Package size={16} color="#FAFAFA" weight="fill" />
                </BenefityIcon>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <BenefityIcon $backgroundIcon="#DBAC2C">
                  <Timer size={16} color="#FAFAFA" weight="fill" />
                </BenefityIcon>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <BenefityIcon $backgroundIcon="#8047F8">
                  <Coffee size={16} color="#FAFAFA" weight="fill" />
                </BenefityIcon>
                <span>O café chega fresquinho até você</span>
              </li>
            </BenefityList>
          </div>
          <img
            src="./images/hero.svg"
            alt="Um copo branco de café ao lado de grãos de cafe torrados"
          />
        </HeroContainer>
      </HeroBg>
    </main>
  )
}

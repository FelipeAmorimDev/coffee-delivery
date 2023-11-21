import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  AddToCartOptions,
  BenefityIcon,
  BenefityList,
  CoffeeTags,
  HeroBg,
  HeroContainer,
  ShopContainer,
  ShopList,
} from './styles'
import { ItemQuantity } from '../../components/ItemQuantity'
import { coffees } from '../../mock/coffees'

const benefits = [
  {
    id: '1',
    title: 'Compra simples e segura',
    backgroundColor: '#C47F17',
    element: <ShoppingCart size={16} color="#FAFAFA" weight="fill" />,
  },
  {
    id: '2',
    title: 'Embalagem mantém o café intacto',
    backgroundColor: '#574F4D',
    element: <Package size={16} color="#FAFAFA" weight="fill" />,
  },
  {
    id: '3',
    title: 'Entrega rápida e rastreada',
    backgroundColor: '#DBAC2C',
    element: <Timer size={16} color="#FAFAFA" weight="fill" />,
  },
  {
    id: '4',
    title: 'O café chega fresquinho até você',
    backgroundColor: '#8047F8',
    element: <Coffee size={16} color="#FAFAFA" weight="fill" />,
  },
]

export interface IItemToAdd {
  id: string
  title: string
  description: string
  tags: string[]
  price: string
  image: string
  quantity: number
}

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
              {benefits.map((benefit) => {
                return (
                  <li key={benefit.id}>
                    <BenefityIcon $backgroundIcon={benefit.backgroundColor}>
                      {benefit.element}
                    </BenefityIcon>
                    <span>{benefit.title}</span>
                  </li>
                )
              })}
            </BenefityList>
          </div>
          <img
            src="./images/hero.svg"
            alt="Um copo branco de café ao lado de grãos de cafe torrados"
          />
        </HeroContainer>
      </HeroBg>

      <ShopContainer>
        <h2>Nossos cafés</h2>
        <ShopList>
          {coffees.map((coffe) => {
            return (
              <li key={coffe.id}>
                <img src={coffe.image} alt="" />
                <CoffeeTags>
                  {coffe.tags.map((tag) => (
                    <span key={tag}>{tag.toUpperCase()}</span>
                  ))}
                </CoffeeTags>

                <h3>{coffe.title}</h3>
                <p>{coffe.description}</p>

                <div>
                  R$ <span>{coffe.price}</span>
                  <AddToCartOptions>
                    <ItemQuantity coffe={coffe} />
                  </AddToCartOptions>
                </div>
              </li>
            )
          })}
        </ShopList>
      </ShopContainer>
    </main>
  )
}

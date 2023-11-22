import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  CartContainer,
  CartList,
  CartListContainer,
  CompleteOrderContainer,
  FormLabel,
  InputsContainer,
  PaymentMethod,
  PriceContainer,
} from './styles'
import { RadioPaymentMethod } from './components/RadioPaymentMethod'
import { useContext, useState } from 'react'
import { cartContext } from '../../context/CartContext'
import { CartItem } from './components/CartItem'

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const { cartList } = useContext(cartContext)

  return (
    <CartContainer>
      <CompleteOrderContainer>
        <span>Complete seu pedido</span>
        <form>
          <FormLabel>
            <MapPin size={22} color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormLabel>
          <InputsContainer>
            <input type="text" name="zip" id="zip" placeholder="CEP" />
            <input type="text" name="address" id="address" placeholder="Rua" />
            <div>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Número"
              />
              <input
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento"
              />
            </div>
            <div>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
              />
              <input type="text" name="city" id="city" placeholder="Cidade" />
              <input type="text" name="state" id="state" placeholder="UF" />
            </div>
          </InputsContainer>
          <FormLabel>
            <CurrencyDollar size={22} color="#C47F17" />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </FormLabel>
          <PaymentMethod>
            <RadioPaymentMethod
              value="creditcard"
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
            >
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </RadioPaymentMethod>
            <RadioPaymentMethod
              value="debitcard"
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
            >
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </RadioPaymentMethod>
            <RadioPaymentMethod
              value="money"
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
            >
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </RadioPaymentMethod>
          </PaymentMethod>
        </form>
      </CompleteOrderContainer>

      <CartListContainer>
        <span>Cafés selecionados</span>
        <CartList>
          {cartList.map((cartItem) => {
            return <CartItem key={cartItem.id} coffee={cartItem} />
          })}
        </CartList>
        <PriceContainer>
          <p>
            Total de itens<span>R$ 29,70</span>
          </p>
          <p>
            Entrega<span>R$ 3,50</span>
          </p>
          <p>
            Total<span>R$ 33,20</span>
          </p>
        </PriceContainer>
        <button>CONFIRMAR PEDIDO</button>
      </CartListContainer>
    </CartContainer>
  )
}

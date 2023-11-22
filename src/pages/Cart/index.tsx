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
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const confirmOrderSchema = zod.object({
  zip: zod.number({
    required_error: 'O campo cep é obrigatorio',
    invalid_type_error: 'O campo cep tem que ser um numero',
  }),
  address: zod.string().min(1, 'Digite um endereço valido'),
  number: zod.number({
    required_error: 'O campo numero é obrigatorio',
    invalid_type_error: 'O campo numero é do tipo numerico',
  }),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Digite um bairro valido'),
  city: zod.string().min(1, 'Digite uma cidade valida'),
  state: zod.string().min(1, 'Digite um estado valido'),
})

type ConfirmOrderData = zod.infer<typeof confirmOrderSchema>

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('creditcard')
  const { cartList, addItensToOrderList, cleanCartList } =
    useContext(cartContext)

  const { register, handleSubmit } = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderSchema),
    defaultValues: {
      zip: undefined,
      address: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const totalCartPrice = cartList.reduce(
    (acc, cartItem) => Number(cartItem.price) * cartItem.quantity + acc,
    0,
  )
  const deliveryPrice = 10.5
  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderData, event: any) {
    const paymentMethod = event.target.paymentmethod.value
    const id = new Date().getTime()
    addItensToOrderList({ ...data, id, paymentMethod })
    cleanCartList()
    navigate(`/order/${id}/success`)
  }

  return (
    <CartContainer>
      <CompleteOrderContainer>
        <span>Complete seu pedido</span>
        <form id="checkoutform" onSubmit={handleSubmit(handleConfirmOrder)}>
          <FormLabel>
            <MapPin size={22} color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FormLabel>
          <InputsContainer>
            <input
              type="number"
              id="zip"
              maxLength={8}
              placeholder="CEP"
              {...register('zip', { valueAsNumber: true })}
            />
            <input
              type="text"
              id="address"
              placeholder="Rua"
              {...register('address')}
            />
            <div>
              <input
                type="number"
                id="number"
                placeholder="Número"
                {...register('number', { valueAsNumber: true })}
              />
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                {...register('city')}
              />
              <input
                type="text"
                id="state"
                placeholder="UF"
                {...register('state')}
              />
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
            Total de itens<span>R$ {totalCartPrice.toFixed(2)}</span>
          </p>
          <p>
            Entrega<span>R$ {deliveryPrice.toFixed(2)}</span>
          </p>
          <p>
            Total<span>R$ {(totalCartPrice + deliveryPrice).toFixed(2)}</span>
          </p>
        </PriceContainer>
        <button form="checkoutform">CONFIRMAR PEDIDO</button>
      </CartListContainer>
    </CartContainer>
  )
}

import {
  CartContainer,
  CartListContainer,
  CompleteOrderContainer,
} from './styles'

import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutForm } from './components/CheckoutForm'
import { CartListData } from './components/CartListData'

const confirmOrderSchema = zod.object({
  zip: zod.string({
    required_error: 'O campo cep é obrigatorio',
    invalid_type_error: 'O campo cep tem que ser um numero',
  }),
  address: zod.string().min(1, 'Digite um endereço valido'),
  number: zod.string({
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
  const { addItensToOrderList, paymentMethod, resetPaymentMethod } =
    useContext(cartContext)

  const confirmOrderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderSchema),
    defaultValues: {
      zip: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderData) {
    addItensToOrderList({
      ...data,
      paymentMethod,
    })

    resetPaymentMethod()
  }

  return (
    <CartContainer>
      <CompleteOrderContainer>
        <span>Complete seu pedido</span>
        <form id="checkoutform" onSubmit={handleSubmit(handleConfirmOrder)}>
          <FormProvider {...confirmOrderForm}>
            <CheckoutForm />
          </FormProvider>
        </form>
      </CompleteOrderContainer>

      <CartListContainer>
        <span>Cafés selecionados</span>
        <CartListData />
      </CartListContainer>
    </CartContainer>
  )
}

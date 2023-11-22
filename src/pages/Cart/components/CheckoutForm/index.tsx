import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'
import { FormLabel, InputsContainer, PaymentMethod } from '../../styles'
import { RadioPaymentMethod } from '../RadioPaymentMethod'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState('Cartão de Credito')
  const { register } = useFormContext()

  return (
    <>
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
          value="Cartão de Credito"
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        >
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </RadioPaymentMethod>
        <RadioPaymentMethod
          value="Cartão de Debito"
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        >
          <Bank size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </RadioPaymentMethod>
        <RadioPaymentMethod
          value="Dinheiro"
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        >
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </RadioPaymentMethod>
      </PaymentMethod>
    </>
  )
}

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  DataContainer,
  DeliveryInfoItem,
  IconContainer,
  SuccessOrderContainer,
} from './styles'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

const paymentMethods = {
  money: 'Dinheiro',
  creditcard: 'Cartão de Credito',
  debitcard: 'Cartão de Debito',
}

export function SuccessOrder() {
  const { orderList } = useContext(cartContext)
  const params = useParams()

  const orderConfirmed = orderList.find(
    (order) => order.id === Number(params.orderId),
  )

  const paymentType = orderConfirmed?.paymentMethod

  return (
    <SuccessOrderContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <ul>
          <DeliveryInfoItem>
            <IconContainer>
              <MapPin size={16} weight="fill" color="#FAFAFA" />
            </IconContainer>
            <DataContainer>
              <p>
                Entrega em{' '}
                <strong>
                  {orderConfirmed?.address}, {orderConfirmed?.number}
                </strong>
              </p>
              <p>
                {orderConfirmed?.neighborhood} - {orderConfirmed?.city},{' '}
                {orderConfirmed?.state}
              </p>
            </DataContainer>
          </DeliveryInfoItem>
          <DeliveryInfoItem>
            <IconContainer>
              <Timer size={16} weight="fill" color="#FAFAFA" />
            </IconContainer>
            <DataContainer>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </DataContainer>
          </DeliveryInfoItem>
          <DeliveryInfoItem>
            <IconContainer>
              <CurrencyDollar size={16} color="#FAFAFA" />
            </IconContainer>
            <DataContainer>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethods[paymentType]}</strong>
              </p>
            </DataContainer>
          </DeliveryInfoItem>
        </ul>
      </div>
      <img src="/images/delivery.svg" alt="" />
    </SuccessOrderContainer>
  )
}

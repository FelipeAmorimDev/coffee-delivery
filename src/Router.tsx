import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'
import { Cart } from './pages/Cart'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}

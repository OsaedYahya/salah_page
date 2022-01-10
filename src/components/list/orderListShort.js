import React from 'react'
import OrderItem from '../orderItem/orderItem'

const OrdersListShort = (props) => {
  const { orders, title = '', logo = '' } = props
    return       <div style={{ flex: 1, marginBottom: 50}}>
      <div style={{flex: 1}}>
        <img width={"100%"} src={logo}/>
      </div>
      <text style={{color: 'black', margin: 8, textAlign: 'right', fontFamily: 'Cairo', width:'100%'}}>{title}</text>
      <div style={{flex: 1}}>
        {orders.map((item) => {
          return <OrderItem direction={"left"} item={item}/>
        })}
      </div>
    </div>

}
export default OrdersListShort

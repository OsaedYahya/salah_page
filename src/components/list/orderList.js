import React from 'react'
import OrderItem from '../orderItem/orderItem'

const OrdersList = (props) => {
  const { orders, title = '', logo = '' } = props
  if (orders.length <= 3) {
    return <div style={{ flex: 1, marginBottom: 50}}>
      <div style={{flex: 1,justifyContent:'flex-start',display:'flex'}}>
        <text style={{color: 'black', margin: 8, textAlign: 'right', width:'100%'}}>{title}</text>
      </div>
      <div style={{flex: 1, flexDirection: 'row', display:'flex' }}>
        <div style={{flex: 1}}>
          <img width={"100%"} src={logo}/>
        </div>
        <div style={{flex: 1}}>
          {orders.map((item) => {
            return <OrderItem direction={"left"} item={item}/>
          })}
        </div>
      </div>
    </div>
  } else {
    const max = Math.floor((orders.length-1) / 1.5);
    return <div style={{ flex: 1, marginBottom: 50}}>
      <div style={{flex: 1,justifyContent:'flex-start',display:'flex'}}>
        <text style={{color: 'black',fontFamily: 'Cairo-Regular', margin: 8, textAlign: 'right', width:'100%'}}>{title}</text>
      </div>
      <div style={{flex: 1, flexDirection: 'row', display:'flex' }}>
        <div style={{flex: 1}}>
          <img width={"100%"} src={logo}/>
          <div style={{flex: 1}}>
            {orders.slice(max).map((item) => {
              return <OrderItem direction={"right"} item={item}/>
            })}
          </div>
        </div>
        <div style={{flex: 1}}>
          {orders.slice(0, max).map((item) => {
            return <OrderItem direction={"left"} item={item}/>
          })}
        </div>

      </div>
    </div>

  }
}
export default OrdersList

import React from 'react'
import GoogleMap from './GoogleMap'
import { AccessTimeOutlined, MapOutlined, PhoneOutlined, LocalShippingOutlined } from '@mui/icons-material'

const GoogleMapContainer = (props) => {
  const { orders = [], address, phone, title = '', logo = '' } = props
  const max = Math.floor((orders.length - 1) / 1.5)

  const container = {
    flex: 1,
    display: 'flex',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
  const subContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 4,
    borderBottom: '1px solid #c1c1c1',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  }
  const textRightStyle = {
    color: 'black',
    fontFamily: 'Cairo-Regular',
    margin: 4,
    fontSize: 13,
    textAlign: 'right',
    width: '100%'
  }
  const textContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }

  const headerContainer = {
    color: 'black',
    fontFamily: 'Cairo-Regular',
    margin: 4,
    textAlign: 'right',
    width: '100%'
  }
  const textLeftStyle = {
    color: 'black',
    fontFamily: 'Cairo-Regular',
    margin: 4,
    fontSize: 13,
    textAlign: 'left',
    width: '100%'
  }
  const iconStyle = { color: '#333' }

  return <div style={{ flex: 1 }}>
    <div style={{height: 30}}/>
    <GoogleMap/>
    <div style={{ marginTop: 80, justifyContent: 'flex-start', display: 'flex' }}>
      <text style={{
        color: 'black',
        fontFamily: 'Cairo-Regular',
        margin: 8,
        textAlign: 'right',
        width: '100%'
      }}>لحصول على مراجعة موثوقة على الشاشة لحالة طلبك ، في الوقت الفعلي ، قد يتم حفظ بياناتك على
        هذا الجهاز باستخدام ملفات تعريف الارتباط. يرجى قراءة
        <a
          href={'https://www.yprestaurants.com/ordering/restaurant/menu/info?company_uid=a1d963ed-d221-4c6f-916a-e3589d6af62f&restaurant_uid=56909eee-c2e9-4634-a1df-210ea1e76dc7&facebook=true'}
          style={{ marginLeft: 10, marginRight: 10, textDecoration: 'underline' }}>سياسة ملفات تعريف
          الارتباط الخاصة
          بنا</a>وتغيير الإعدادات الخاصة بك في أي وقت
      </text>
    </div>
    <div className={"MapRow"}>
      {/*<div style={container}>
        <div style={subContainer}>
          <text style={headerContainer}>رسوم التوصيل
          </text>
          <LocalShippingOutlined style={iconStyle}/>
        </div>
        <div style={textContainer}>
          <text style={textRightStyle}>مصاريف - ₪13.00
          </text>
        </div>
      </div>*/}
      <div style={container}>
        <div style={subContainer}>
          <text style={headerContainer}>ساعات العمل
          </text>
          <AccessTimeOutlined style={iconStyle}/>
        </div>
        <div style={textContainer}>
          <text style={textLeftStyle}>11:00 - 22:00
          </text>
          <text style={textRightStyle}>الجمعة
          </text>
        </div>
      </div>
    </div>

    <div className={"MapRow"}>
      <div style={container}>
        <div style={subContainer}>
          <text style={headerContainer}>رقم الهاتف
          </text>
          <PhoneOutlined style={iconStyle}/>
        </div>
        <div style={textContainer}>
          <text style={textRightStyle}>{phone}
          </text>
        </div>
      </div>
      <div style={container}>
        <div style={subContainer}>
          <text style={headerContainer}>العنوان
          </text>
          <MapOutlined style={iconStyle}/>
        </div>
        <div style={textContainer}>
          <text style={textRightStyle}>{address}
          </text>
        </div>
      </div>
    </div>
  </div>
}
export default GoogleMapContainer

import Button from '@mui/material/Button'
import React from 'react'

export const ClosedRestaurantPage =() => {
  return                 <div style={{ height: '95vh', display:'flex',justifyContent: 'space-between',flexDirection:'column',flex: 1, backgroundColor: '#e8e8e8' }}>
    <div style={{
      color: '#333',
      backgroundColor: 'white',
      boxShadow: "0px 0px 5px -1px rgba(0,0,0,0.43)",
      marginLeft: 10,
      marginRight: 10,
      textAlign: 'right',
      paddingTop: 20,
      paddingBottom: 20,
      marginTop: 80,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <text style={{ textAlign: 'center',fontFamily: "Cairo", fontSize: 14, width: '100%' }}> لتقوم بعمل طلب، من فضلك أتصل
        بنا على: +970 2 298 0033
      </text>
      <text style={{ textAlign: 'center',fontFamily: "Cairo", fontSize: 14, width: '100%' }}>للأسف لا نقوم حاليا بقبول
        الطلبات من خلال الموقع
      </text>
    </div>
    <div style={{
      color: '#333',
      backgroundColor: 'white',
      boxShadow: "0px 0px 15px -1px rgba(0,0,0,0.43)",
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'row',
    }}>
      <text style={{  whiteSpace: 'pre-line', marginBottom: 10, textAlign: 'center',fontFamily: "Cairo", width: '100%' }}>{`
                  :من خلال تقديم هذا الطلب ، فإنك تقبل
                  - سياسة معالجة البيانات - نهاية اتفاقية ترخيص المستخدم
                  - شروط المطعم - سياسة الخصوصية
`}</text>
      <Button disabled  color='secondary' variant="contained" style={{ borderRadius: 10, borderWidth: 0,margin: 10, alignItems: 'center', justifyContent:'center',textAlign: 'center',fontFamily: "Cairo", flexDirection:'row', display:'flex', width: '100%' }}>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <text style={{color: 'white', fontSize: 16,textAlign: 'center',fontFamily: "Cairo", width: 100 }}>
            المجموع
          </text><text style={{color: 'white', fontSize: 16,textAlign: 'center',fontFamily: "Cairo", width: 100 }}>
          30
        </text>
        </div>
        <div style={{width: 2, height: 50, backgroundColor: 'white'}} />
        <text style={{ marginTop: 10,color: 'white', fontSize: 16, marginBottom: 10,textAlign: 'center',fontFamily: "Cairo", width: "100%" }}>
          تأكيد الطلب
        </text>
      </Button>
    </div>
  </div>

}

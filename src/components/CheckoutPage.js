import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import {
  AccessTimeOutlined,
  EmailOutlined,
  LocationCity, MapOutlined,
  NoteOutlined,
  PersonOutlined,
  PhoneOutlined
} from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import { useForm } from 'react-hook-form'
import { rowHeader, textStyleNoFlex, row, sumNumberStyle, sumStyle, textGreyStyle, textStyle } from './CheckoutPage.style'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { TabPanel } from './tabPanel/TabPanel'

export const CheckoutPage = (props) => {
  const { locations = [], branches = [] } = props;
  const items = [{
    name: 'فارايتي بكت',
    quantity: 1,
    price: 106,
    addons: ['اضافات:أضف بطاطا حجم كبير (15.00+)', 'اضافات:أضف ماش بالجريفي حجم كبير (15.00+)']
  }, {
    name: 'فارايتي بكت',
    quantity: 1,
    price: 30,
    addons: ['اضافات:أضف بطاطا حجم كبير (15.00+)', 'اضافات:أضف ماش بالجريفي حجم كبير (15.00+)']
  }]

  const [time, setTime] = useState('now')
  const [branch, setBranch] = useState()
  const [city, setCity] = useState()
  const [place, setPlace] = useState()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const onSubmit = data => {
    addMultipleCacheData(data);
    localStorage.removeItem("cart")
    getCart();
  }

  const handleChangeTime = (event) => {
    setTime(event.target.value)
  }

  const timeOptions = [
    {
      value: 'now',
      label: 'الان',
    }, {
      value: 'after1hour',
      label: 'بعد ساعة',
    }, {
      value: 'after2hour',
      label: 'بعد ساعتين',
    }
  ]

  useEffect(() => {
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const mobile_number = localStorage.getItem('mobile_number')
    const city = localStorage.getItem('city')
    const address = localStorage.getItem('address')
    setValue('name', name)
    setValue('email', email)
    setValue('mobile_number', mobile_number)
    setValue('city', city)
    setValue('address', address)
  }, [])

  const addMultipleCacheData = async (data) => {
    const {
      name = '',
      email = '',
      mobile_number = '',
      city = '',
      address = '',
    } = data
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('mobile_number', mobile_number)
    localStorage.setItem('city', city)
    localStorage.setItem('address', address)
  }
  const [cart, setCart] = useState([]);
  const [sum, setSum]= useState(0)
  const getCart = async () => {
    const cart = JSON.parse(await localStorage.getItem('cart'));
    if(!cart || cart.length === 0)
      return;
    const x = cart.map((item) => parseInt(item.basePrice)).reduce((item1, item2) => item1 + item2);
    const sum = cart.map((item) => item.attributes.map((item) => item?.sum || 0).reduce((item1, item2) => (item1 || 0) + (item2|| 0)))
    const sums = sum.reduce((item1, item2) => item1 + item2) || 0;
    setCart(cart);
    setSum(x + sums);
  }

  useEffect(() => {
    getCart();
  }, [])
  const [selectedCity, setSelectedCity] = useState([]);
  return <div style={{
    minHeight: '95vh',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#e8e8e8'
  }}>
    <div className={"CheckoutContainer"}>
      <div className={"CheckoutCard"}>
        <div style={row}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
            <text style={textStyle}>معلومات للتواصل</text>
            <div
              style={{ display: 'flex', flex: 1, flexDirection: 'row-reverse', paddingBottom: 5 }}>
              <TextField {...register('name')} InputProps={{

                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlined/>
                  </InputAdornment>
                ),
              }} style={{ flex: 1 }}
                         label={'الأسم'} dir={'rtl'} variant="standard"/>

            </div>
            <TextField {...register('mobile_number')} InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneOutlined/>
                </InputAdornment>
              ),
            }} label={'رقم الجوال'} dir={'rtl'}
                       variant="standard"/>
          </div>
        </div>
        <div style={row}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
            <text style={textStyle}>اختر المحافظة</text>

            <TextField inputProps={{
              iconButton: <NoteOutlined/>,
            }} value={city}
                       onChange={(event) => setCity(event.target.value)} select InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MapOutlined/>
                </InputAdornment>
              ),
            }} dir={'rtl'} variant="standard">
              {locations.map((option) => (
                <MenuItem onClick={() => setSelectedCity(option)} dir={'rtl'} key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <text style={textStyle}>اختر الفرع</text>
            <TextField inputProps={{
              iconButton: <NoteOutlined/>,
            }} value={branch}
                       onChange={(event) => setBranch(event.target.value)} select InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCity/>
                </InputAdornment>
              ),
            }} dir={'rtl'} variant="standard">
              {branches.map((option) => (
                <MenuItem dir={'rtl'} key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <text style={textStyle}>اختر مكان</text>
            <TextField inputProps={{
              iconButton: <NoteOutlined/>,
            }} value={place}
                       onChange={(event) => setPlace(event.target.value)} select InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MapOutlined/>
                </InputAdornment>
              ),
            }} dir={'rtl'} variant="standard">
              {(locations.find((item)=> item.id === selectedCity.id)?.sub_locations || [])?.map((option) => (
                <MenuItem dir={'rtl'} key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div style={row}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
            <text style={textStyle}>اختر وقت</text>
            <TextField
              id="time"
              type="time"
              defaultValue="12:00"
              InputLabelProps={{
                shrink: false,
                width:'100%',
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
        <div style={row}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
            <text style={textStyle}>ملاحظات</text>
            <TextField multiline InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NoteOutlined/>
                </InputAdornment>
              ),
            }} dir={'rtl'} variant="standard"/>
          </div>
        </div>
      </div>
      <div className={"CheckoutCard"}>
        <div style={rowHeader}>
          <text style={textStyleNoFlex}>السعر</text>
          <text style={textStyle}>مادة</text>
          <text style={textStyleNoFlex}>كمية</text>
        </div>
        {cart.map((item) => {
          const { name = '', amount = 1, basePrice = 0, attributes = [] } = item
          const sum = attributes.map((item) => item.sum).reduce((item1, item2) => item1 + item2) || 0;
          console.log(sum);
          return <div style={row}>
            <text style={textStyleNoFlex}>{parseInt(basePrice) + sum}</text>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
              <text style={textStyle}>{name}</text>
              {attributes.map((attribute) =>
                attribute?.values.map((value)=> value?.checked && <text style={textGreyStyle}>{value?.title} ({value?.price}₪)</text>)
              )}
            </div>
            <text style={textStyleNoFlex}>{amount}</text>
          </div>
        })}
{/*
        {items.map((item) => {
          const { name = '', quantity = 1, price = 0, addons = [] } = item
          return <div style={row}>
            <text style={textStyleNoFlex}>{price}</text>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: 5 }}>
              <text style={textStyle}>{name}</text>
              {addons.map((addon) =>
                <text style={textGreyStyle}>{addon}</text>
              )}
            </div>
            <text style={textStyleNoFlex}>{quantity}</text>
          </div>
        })
        }
*/}
        <div style={row}>
          {cart.length === 0 ? <text style={textStyle}>قم بإضافة منتجات الى سلتك</text>:
            <>
            <text
            style={sumNumberStyle}>{sum}</text>
            <text style={sumStyle}>المجموع</text>
            </>
          }
        </div>
      </div>
    </div>
    <div className={"CheckoutButtonContainer"}>
      <Button onClick={handleSubmit(onSubmit)} color='secondary' variant="contained" style={{
        borderRadius: 10,
        borderWidth: 0,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Cairo',
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
      }}>
        <div
          style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <text style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Cairo',
            width: 100
          }}>
            المجموع
          </text>
          <text style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Cairo',
            width: 100
          }}>
            {sum}
          </text>
        </div>
        <div style={{ width: 2, height: 50, backgroundColor: 'white' }}/>
        <text style={{
          marginTop: 10,
          color: 'white',
          fontSize: 16,
          marginBottom: 10,
          textAlign: 'center',
          fontFamily: 'Cairo',
          width: '100%'
        }}>
          تأكيد الطلب
        </text>
      </Button>
      <text style={{
        flex: 1,
        whiteSpace: 'pre-line',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Cairo',
        width: '100%'
      }}>{`
                  :من خلال تقديم هذا الطلب ، فإنك تقبل
                  - سياسة معالجة البيانات - نهاية اتفاقية ترخيص المستخدم
                  - شروط المطعم - سياسة الخصوصية
`}</text>
    </div>
  </div>

}

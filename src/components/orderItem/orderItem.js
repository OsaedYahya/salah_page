import Popup from 'reactjs-popup'
import React, { createRef, useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/reducers/home.reducer'

const bodyScrollLock = require('body-scroll-lock')
const disableBodyScroll = bodyScrollLock.disableBodyScroll
const enableBodyScroll = bodyScrollLock.enableBodyScroll
const OrderItem = (props) => {
  const { item, direction } = props
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const ref = createRef()
  const [dynamicDirection, setDynamicDirection] = useState('center')
  let currentItem = item;
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  function getWindowDimensions () {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [show, setShow] = useState(false)

  const handleOpenPopover = (e) => {
    const { height } = windowDimensions
    if (e.nativeEvent.clientY <= height / 3) {
      setDynamicDirection('top')
    } else if (e.nativeEvent.clientY >= height / 3 && e.nativeEvent.clientY < (2 * height) / 3) {
      setDynamicDirection('center')
    } else setDynamicDirection('bottom')
    setShow(true)
    disableBodyScroll(document)
  }
  const handleClosePopover = () => {
    setShow(false)
    enableBodyScroll(document)
  }
  useEffect(() => {
    if (show) {
      ref?.current?.open()
    }
  }, [show])

  const handleAddToCart = async () => {
    ref?.current?.close()
    dispatch(increment())
    const cartJSON = await localStorage.getItem('cart') || "[]";
    const cart = JSON.parse(cartJSON)  || []

    cart.push({
      ...currentItem,
      description,
      amount,
    })
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  const changeSelectedAddons = (attribute, valueId, checked) => {
    const x = currentItem.attributes.find((item) => item.id === attribute)?.values.find((value)=>value?.id === valueId);
    x["checked"] = checked;
    if(checked){
      currentItem.attributes.find((item) => item.id === attribute)["sum"]
        = (parseInt(currentItem.attributes.find((item) => item.id === attribute)["sum"] || 0))  +  parseInt(x.price);
    } else {
      currentItem.attributes.find((item) => item.id === attribute)["sum"]
        = (parseInt(currentItem.attributes.find((item) => item.id === attribute)["sum"]))  -  parseInt(x.price);
    }
    console.log(currentItem);
  }

  const onChangeDescription = (event)=> {
    setDescription(event.target.value);
  }

  const onChangeAmount = (event) => {
    setAmount(event.target.value)
  }
  const popoverTrigger = <div onClick={handleOpenPopover} className={'HEYY'}>
    <div style={{
      backgroundColor: show ? '#f7f7f7' : 'white',
      borderStyle: 'solid',
      borderColor: 'grey',
      borderWidth: '1px 0px',
      height: 50,
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      display: 'flex',
      zIndex: show ? 9999 : 0,
    }}>
      <div style={{
        flex: 1,
        backgroundColor: show ? '#f7f7f7' : 'white',
        paddingLeft: 12,
        height: 50,
        zIndex: show ? 9999 : 0,
        paddingRight: 12,
        flexDirection: 'column',
        display: 'flex'
      }}>
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
          <text style={{
            color: 'black',
            fontFamily: 'Cairo-Regular',
            fontSize: 14,
            fontWeight: '600'
          }}>₪{item.basePrice}</text>
          <text style={{
            color: 'black',
            fontFamily: 'Cairo-Regular',
            fontSize: 14,
            fontWeight: '600'
          }}>{item.name}</text>
        </div>
        <text style={{
          color: 'black',
          fontFamily: 'Cairo-Regular',
          fontSize: 12,
          textAlign: 'right'
        }}>{item.description}</text>
      </div>
      <img width={50} height={50} src={item.image}
           style={{ width: 50, height: 50, zIndex: show ? 9999 : 0 }}/>
    </div>
  </div>


  return <>
    {popoverTrigger}
    <Popup ref={ref} trigger={<div/>}
           onClose={handleClosePopover} arrow={false}
           contentStyle={{ backgroundColor: 'transparent', borderRadius: 50 }}
           overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
           offsetY={dynamicDirection === 'top' ? -80 : dynamicDirection === 'bottom' ? 80 : 0}
           nested position={`${direction} ${dynamicDirection}`}>
      <div className={'PopOver'}
           style={{ boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.3)', borderRadius: 8 }}>
        <div style={{
          width: '100%',
          paddingTop: 10,
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={item.image} className={'Image'} style={{ backgroundColor: '#fff' }}/>
        </div>
        <div style={{ alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
          <text style={{
            color: 'black',
            fontFamily: 'Cairo-Regular',
            fontSize: 12,
            margin: 10
          }}>{item.description}</text>
        </div>
        <div style={{
          alignItems: 'flex-end',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          margin: 10
        }}>
          {item?.attributes.map((attribute) =>
            <div>
              <text style={{ color: 'black', fontFamily: 'Cairo-Regular', fontSize: 13 }}>الكمية
              </text>
              <FormGroup style={{ direction: 'rtl', width: '23vw' }}>
                {attribute.values.map((value) => <FormControlLabel onChange={(x, checked) => changeSelectedAddons(attribute?.id, value?.id, checked)} style={{
                  backgroundColor: 'white',
                  fontFamily: 'Cairo-Regular',
                  border: '0.5px solid #c1c1c1'
                }} control={<Checkbox/>}
                                                                   label={<Typography style={{
                                                                     fontFamily: 'Cairo-Regular',
                                                                     fontSize: 12
                                                                   }}>{`${value?.title} (${value?.price}₪)`}</Typography>}
                />)}
              </FormGroup>
            </div>
          )}
          <text style={{ color: 'black', fontFamily: 'Cairo-Regular', fontSize: 13 }}>تعليمات خاصة
          </text>
          <TextField value={description} onChange={onChangeDescription} multiline maxRows={4} style={{
            width: '100%',
            backgroundColor: 'white',
            fontFamily: 'Cairo-Regular'
          }}
                     inputProps={{
                       style: { fontFamily: 'Cairo-Regular', textAlign: 'right', fontSize: 14 }
                     }} placeholder={'مثال: بدون فلفل / سكر / ملح من فضلك'}/>
          <text style={{ color: 'black', fontFamily: 'Cairo-Regular', fontSize: 13 }}>الكمية</text>
          <TextField onChange={onChangeAmount} style={{ width: '100%', backgroundColor: 'white' }} inputProps={{
            inputMode: 'numeric', pattern: '[0-9]*',
            style: { fontFamily: 'Cairo-Regular', textAlign: 'right', fontSize: 14 }
          }} placeholder={'1'} type={'number'}/>
          <Button onClick={() => handleAddToCart({
            ...item,
            attributes: [

            ]
          })} color='secondary' variant="contained" style={{
            borderRadius: 10,
            borderWidth: 0,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Cairo',
            flexDirection: 'row',
            width: '100%',
            alignSelf: 'center',
            display: 'flex',
            flex: 1,
          }}>
            <text style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Cairo',
              width: 100
            }}>
              ₪{item.basePrice}
            </text>
            <div style={{ width: 2, height: 50, backgroundColor: 'white' }}/>
            <text style={{
              marginTop: 10,
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
              textAlign: 'center',
              fontFamily: 'Cairo',
              width: '100%'
            }}>
              أضف الى سلة الطلبات
            </text>
          </Button>
        </div>
      </div>
    </Popup>
  </>
}

export default OrderItem

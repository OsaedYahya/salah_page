import './App.css'
import OrdersList from './components/list/orderList'
import Header from './components/header/header'
import React, { useEffect, useState } from 'react'
import { TabPanel } from './components/tabPanel/TabPanel'
import GoogleMapContainer from './components/GoogleMapContainer'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CheckoutPage } from './components/CheckoutPage'
import OrdersListShort from './components/list/orderListShort'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { setCartCount } from './components/redux/reducers/home.reducer'

function App () {

  const orders = [{
    name: 'وجبة شنيتسل',
    desc: 'الوجبة تشمل (قطع شنيتسل دجاج + سلطة + بطاطا) + كولا + خبز',
    price: '32.00',
    image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
  },
    {
      name: 'وجبة معراف',
      desc: 'الوجبة تشمل(معراف + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'وجبة ستيك دجاج',
      desc: 'الوجبة تشمل(قطع صدر دجاج مشوي +سلطة + بطاطا)' +
        '  +كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    }, {
      name: 'وجبة شنيتسل',
      desc: 'الوجبة تشمل (قطع شنيتسل دجاج + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'وجبة معراف',
      desc: 'الوجبة تشمل(معراف + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'وجبة ستيك دجاج',
      desc: 'الوجبة تشمل(قطع صدر دجاج مشوي +سلطة + بطاطا)' +
        '  +كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    }, {
      name: 'وجبة شنيتسل',
      desc: 'الوجبة تشمل (قطع شنيتسل دجاج + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'وجبة معراف',
      desc: 'الوجبة تشمل(معراف + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'DDD',
      desc: 'الوجبة تشمل(قطع صدر دجاج مشوي +سلطة + بطاطا)' +
        '  +كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    }, {
      name: 'CCC',
      desc: 'الوجبة تشمل (قطع شنيتسل دجاج + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'BBB',
      desc: 'الوجبة تشمل(معراف + سلطة + بطاطا) + كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
    {
      name: 'AAAA',
      desc: 'الوجبة تشمل(قطع صدر دجاج مشوي +سلطة + بطاطا)' +
        '  +كولا + خبز',
      price: '32.00',
      image: 'https://d2vwsr3mua7yp8.cloudfront.net/86aa2376-b179-4e1c-960f-a5f615a5e743_d3.jpg',
    },
  ]

  const [value, setValue] = useState(2)
  const theme = createTheme({
    direction: 'rtl',
    palette: {
      primary: {
        main: '#66acef'
      },
      secondary: {
        main: '#f08b18'
      }
    },
    components: {
      // Style sheet name
      MuiFormControl: {
        // Name of the rule
        styleOverrides: {
          root: {
            marginTop: 10,
          },
        }
      },
      MuiFormLabel: {
        // Name of the rule
        styleOverrides: {
          root: {
            fontSize: '14px',
            width: '133%',
            fontFamily: 'Cairo'
          },
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            paddingLeft: 10,
            fontSize: '14px',
            fontFamily: 'Cairo'
          },
          input: {
            paddingRight: 10,
          },
          underline: {
            color: '#333'
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'Cairo',
          },
        }
      },
      MuiSelect: {
        styleOverrides: {
          select: {},
          icon: {
            left: 0,
            right: 'initial'
          }
        }
      }
    }
  })
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const [company, setCompany] = useState([]);
  const [categories, setCategories] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    /*const queryString = window.location.search;*/
    fetch("https://run.mocky.io/v3/22611644-6664-4aa9-a3bb-15c1764777ca").then(res => res.json()).then((res)=>{
      setCompany(res?.companyDetails)
      setCategories(res?.categories)
    });
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      err => console.log(err)
    );
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  let OrderListItem = isSmallScreen ? OrdersListShort : OrdersList

  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.home.cartCount)


  const getCart= async () => {
    const cart = await localStorage.getItem('cart') || [];
    dispatch(setCartCount(JSON.parse(cart).length));
  }

  useEffect(() => {
    getCart();
  }, [dispatch, getCart])

  return (
    <ThemeProvider theme={theme}>
      <div id={"App"} className="App">
        <header className="App-header">
          <div id={"Main"} className="Main">
            <div style={{ backgroundColor: 'white', position: 'relative' }}>
              <div style={{ position: 'absolute' }}>
                <Header cartCount={cartCount} title={company?.name} value={value} setValue={setValue}/>
              </div>
              <TabPanel value={value} index={2} style={{ width: '100%' }}>
                <img style={{ aspectRatio: 3.375, maxWidth: '100%' }}
                     src={company?.logo}/>
                <div className={"BlurredImage"}>
                  <ImageListItem style={{
                    maxWidth: '50%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    opacity: 1,
                    border: '5px solid #fff'
                  }}>
                    <img
                      src={company?.adBanner}
                      srcSet={company?.adBanner}
                      alt={'Hey'}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      style={{ height: '100%' }}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        >
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </div>
                {categories.map((item)=>
                  <OrderListItem title={item?.name}
                                 logo={item?.image}
                                 orders={item?.products}/>
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className={'Google'}>
                  <GoogleMapContainer phone={company?.phone} address={company?.address} orders={orders}/>
                </div>
              </TabPanel>
              <TabPanel value={value} index={0}>
                {/*<ClosedRestaurantPage/>*/}
                <div className={"BlurredImage"}>
                  <ImageListItem style={{
                    maxWidth: '50%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    opacity: 1,
                    border: '5px solid #fff'
                  }}>
                    <img
                      src={company?.adBanner}
                      srcSet={company?.adBanner}
                      alt={'Hey'}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      style={{ height: '100%' }}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        >
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </div>
                <div style={{overflow: 'scroll'}}>
                  <CheckoutPage locations={company?.locations} branches={company?.branches}/>
                </div>
              </TabPanel>
            </div>
          </div>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App

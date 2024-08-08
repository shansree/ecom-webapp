import React from 'react'
import ImageCarousel from '../components/banner'
import { Product1 } from '../components/product'
import Category from '../components/category'
import Discount from '../components/discount'
import Lovedcollc from '../components/lovedcollc'
import Newslatter from '../components/newslatter'
import Saleproduct from '../components/saleproduct'

const Home = () => {
  return (
    <>
     <ImageCarousel/>
     <Product1/>
     <Category/>
     <Discount/>
     <Saleproduct/>
     <Lovedcollc/>
     <Newslatter/>
    </>
  )
}

export default Home
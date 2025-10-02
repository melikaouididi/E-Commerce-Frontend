import React from 'react'
import { Header } from '../components/Header'

import { NavBar } from '../components/NavBar'

import { Modal } from '../components/Modal'
import { Banner } from '../components/Banner'
import { CategoriesOfTheMonth } from '../components/CategoriesOfTheMonth'
import { Footer } from '../components/Footer'
import { FeaturedProducts } from '../components/FeaturedProducts'


export const Home = () => {
  return (
    <div >

    <Header/>
     <NavBar/>
     <Modal/>
      <Banner/> 
      <FeaturedProducts/>
      <CategoriesOfTheMonth/>
         <Footer/>  
    
    
    </div>
  )
};
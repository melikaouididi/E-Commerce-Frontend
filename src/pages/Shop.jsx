import React from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Brands } from '../components/Brands';

export const Shop = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Brands/>

        <Footer/>  
    </div>
  )
}

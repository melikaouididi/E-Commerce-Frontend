import React from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Brands } from '../components/Brands';
import ProductList from '../components/ProductList';

export const Shop = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <ProductList/>
        <Brands/>
        <Footer/>  
    </div>
  )
}
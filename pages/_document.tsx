import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ToCart from '../components/goToCart'

 
export default function Document() {
  return (
    <Html>
       {/* Add meta tags here */}
       <title>NBF</title> 
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <link rel="icon" href="/NBF.png" />
          <meta
            name="description"
            content="Big Jacc"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
            rel="stylesheet"
          />
      <Head />
      <body>
        <Navigation />
        <Main />
        <NextScript />
        <ToCart />
        <Footer />
      </body>
    </Html>
  )
}
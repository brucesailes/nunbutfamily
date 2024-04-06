import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import ToCart from '../components/goToCart'

 
export default function Document() {
  return (
    <Html>
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
            rel="stylesheet"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ToCart />
      </body>
    </Html>
  )
}
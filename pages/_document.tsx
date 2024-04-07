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
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ToCart />
      </body>
    </Html>
  )
}
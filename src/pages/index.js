import React from "react"
import Helmet from "react-helmet"

export default function Home() {
  return <>
     <Helmet title="onepage-starter">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" property="og:description" content="minimal onepage-starter with tailwind css" />
    </Helmet>
    <div className="h-screen text-center bg-gray-100">
    <h1 className="pt-10 text-xl">Welcome to <b>onepage-starter</b>: a minimalistic gatsby starter.</h1>
    <p>Contains the very basics: Tailwindcss, Helmet, Google analytics.</p>

    </div>
    </>
}

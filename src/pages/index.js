import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from 'gatsby'

export default function Home() {
  const data = useStaticQuery(graphql`
    query HelmetQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }`)

    return <>
    <Helmet title={data.site.siteMetadata.title}>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" property="og:description" content={data.site.siteMetadata.title} />
    </Helmet>

    <div className="h-screen text-center bg-gray-100">
    <h1 className="pt-10 text-xl">Welcome to <b>onepage-starter</b>: a minimalistic gatsby starter.</h1>
    <p>Contains the very basics: Tailwindcss, Helmet, Google analytics.</p>
    </div>
    </>
}

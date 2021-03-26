import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return <Layout>
    <h1 className="pt-10 text-xl">Welcome to <b>onepage-starter</b>: a minimalistic gatsby starter.</h1>
    <p className="p-2">Contains the very basics: Tailwindcss, Helmet, Google analytics.</p>

    <h1 className="pt-5 font-bold text-xl">Deployment</h1>
    <p className="p-2">To deploy you can use the command <code>npm deploy</code><br />
    It expects a remote named "origin", where it will upload the built app in a commit. <br />
    For more info on how to configure gh-pages, <a className="text-blue-500" href="https://www.npmjs.com/package/gh-pages">click here</a></p>
  </Layout>
}

import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";

// const pageStyles = {
//   color: "#232129",
//   padding: 20,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ul>
          <li>plan your Trek</li>
          <li>book trek</li>
          <li>talk to us</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Home Page | Impacttrek</title>

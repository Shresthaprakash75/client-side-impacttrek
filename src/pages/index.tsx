import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/header";

const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <main>
          hh
        </main>
      </Container>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

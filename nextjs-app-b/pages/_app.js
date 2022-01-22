import Layout from '../components/layout/Layout'
import '../styles/globals.css'

/*
  This _app.js file is the root component of a next.js project.
  Component is the component that holds the page or content that should be displayed on a given route
  When we want global components like navbar that should be displayed on all pages, 
  then this is where they should be rendered.
*/

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

import '../styles/globals.css'
import { Fragment } from 'react';
import MainHeader from '../components/layout/main-header';

function MyApp({ Component, pageProps }) {
  return( 
    <Fragment>
      <MainHeader />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
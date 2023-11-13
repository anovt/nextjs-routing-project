import { Fragment } from 'react';

import MainHeader from './main-header';
import Head from 'next/head';
function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <Head>

        <title>NextJs Events</title>
      </Head>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;

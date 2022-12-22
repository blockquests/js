import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import { Footer } from './footer/footer';
import { Header } from './header/header';

export function Layout() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
      </Helmet>
      <Header name='App'></Header>

      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

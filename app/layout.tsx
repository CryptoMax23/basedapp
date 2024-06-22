import { FC, ReactNode } from 'react';
import Head from 'next/head';
import '../styles/global.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Memes</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout;

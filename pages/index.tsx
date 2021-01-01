import Head from 'next/head';

import { StartPage } from '@src/StartPage';

export const Index = () => {
  return (
    <>
      <Head>
        <title>Start Page</title>
        <meta name="description" content="Start page greeting" />
      </Head>

      <StartPage />
    </>
  );
};

export default Index;

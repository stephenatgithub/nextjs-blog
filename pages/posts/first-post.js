import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Script from 'next/script';

// Link is client-side navigation and does not load the full page 
// <a href="…"> is server side and does a full refresh
// automatically prefetches the code for the linked page in the background

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    );
  }

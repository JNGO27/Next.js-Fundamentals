import Layout from '../components/Layout/Layout';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

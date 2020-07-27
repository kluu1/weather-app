import HeadContent from '../components/_App.js/HeadContent';
import Layout from '../components/_App.js/Layout';
import { StateProvider } from '../store';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <HeadContent />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
};

export default MyApp;

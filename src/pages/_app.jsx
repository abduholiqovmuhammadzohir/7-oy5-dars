import '../app/globals.css';
import Header from '../components/Header'; // Header komponentini import qilamiz
import Footer from '../components/Footer'; // Footer komponentini import qilamiz

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> 
      <Component {...pageProps} />
      <Footer /> 
    </>
  );
}

export default MyApp;

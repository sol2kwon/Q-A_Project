import "@/styles/globals.css";
import { wrapper } from '@/modules/store';
import { Nav,Header,Footer,Herounit } from "@/components";

const App = ({ Component, pageProps }) => {
  return<>
  <Header/>
  <Nav/>
  <Herounit/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default wrapper.withRedux(App)
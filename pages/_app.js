import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

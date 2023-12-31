import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';


import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss';
import 'highlight.js/styles/dracula.css';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

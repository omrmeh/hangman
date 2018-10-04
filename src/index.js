import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './paper-kit.css'
import App from './App';
import 'tachyons';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name='test' />, document.getElementById('root'));
registerServiceWorker();







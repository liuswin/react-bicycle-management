import React from 'react';
import ReactDOM from 'react-dom';
// import Admin from './admin';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';
// import 'antd/dist/antd.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

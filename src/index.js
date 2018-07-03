import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './admin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();

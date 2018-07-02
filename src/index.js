import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Admin from './admin';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();

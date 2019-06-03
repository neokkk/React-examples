import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowerRouter>
    <App />
</BrowerRouter>, document.getElementById('root'));

serviceWorker.unregister();

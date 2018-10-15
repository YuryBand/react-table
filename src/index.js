import React, { Fragment } from 'react';
import {render} from 'react-dom';
import MainPage from './components/MainPage';

import "./styles/index.css"

const App = () => 
(<Fragment>
	<MainPage/>
</Fragment>)

render(<App/>, document.getElementById('app'));
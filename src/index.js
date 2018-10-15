import React, { Fragment } from 'react';
import {render} from 'react-dom';
import MainTab from './components/MainTab';

import "./styles/index.css"

const App = () => 
(<Fragment>
	<MainTab/>
</Fragment>)

render(<App/>, document.getElementById('app'));
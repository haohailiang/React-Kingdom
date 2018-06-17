import React                                      from 'react'
import { render }                                 from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App                                        from './components/App'
import Dufu                                       from './components/Dufu'
import Lsy                                        from './components/Lsy'
import Home                                       from './components/Home'

render((
	<Router history={hashHistory}>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home }/>
			<Route path="/df" component={ Dufu }></Route>
			<Route path="/lsy" component={ Lsy }></Route>
		</Route>
	</Router>
), document.getElementById('container'))

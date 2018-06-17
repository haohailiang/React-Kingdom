import React      from 'react'
import { render } from 'react-dom'
import TodoList   from './components/TodoList'

render((
	<TodoList></TodoList>
), document.getElementById('container'))

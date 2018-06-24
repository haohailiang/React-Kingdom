# React-Kingdom
redux可以赚取更多钱的分支
## 课程目标
使用react-redux开发一个TodoList
## 数据流
1. 就是我们的行为与响应的抽象
2. 使用数据流帮助我们明确了行为对应的响应
## 主流数据流框架
- /Flux/reFlux/redux
- 简单/单一状态树
### action
* 是行为的抽象
* 是普通JS对象
* 一般由方法生成
* 必须有一个type
```javascript
const addTodo = (text) => {
	return {
		type : 'ADD_TODO',
		id   : nextTodoId++,
		text
	}
}
```
### reducer
* 是响应的抽象
* 是纯方法
* 传入旧状态和action
* 返回新状态
```javascript
const todo = (state, action) => {
	switch(action.tye) {
		case 'ADD_TODO':
			return {
				id        : action.id,
				text      : action.text,
				completed : false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			})
		default:
			return state;
	}
}
```
### store
* action作用于store
* reducer根据store响应
* store是唯一的
* store包括了完整的state
* state完全可预测
### 组件
|                     |           container          |       component      |
|:-------------------:|:----------------------------:|:--------------------:|
| 目的                | 如何工作(数据获取, 状态更新) | 如何显示(样式, 布局) |
| 是否在Redux数据流中 | 是                           | 否                   |
| 读取数据            | 从Redux获取state             | 从props获取数据      |
| 修改数据            | 向Redux派发actions           | 从props调用回调函数  |
| 实现方式            | 由react-redux生成            | 手写                 |




## 剪贴板


## Todo
用自己的话把13 原理图描述下

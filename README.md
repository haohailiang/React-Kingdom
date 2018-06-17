# React-Kingdom
响应用户的输入
## 功能概要
主要是有2部分功能组成
1. 画圆圈
2. 计数
3. 调色板
## markdown table快速生成工具
http://www.tablesgenerator.com/markdown_tables
## SyntheticEvent[合成事件],包含以下属性:
属性						类型
bubbles					 boolean
cancelable				 boolean
currentTarget			 DOMEventTarget
defaultPrevented		 boolean
eventPhase				 boolean
isTrusted				 boolean
nativeEvent				 DOMEvent
preventDefault() 		 void
isDefaultPrevented()	 boolean
isPropagationStopped	 void
target					 DOMEventTarget
timeStamp 				 number
type 					 string
以上属性是事件对象的固定部分, 对不同的事件, SyntheticEvent对象还会封装  
不同的属性,例如对应MouseEvent对象,那么还得封装下列属性:
altKey 					 boolean
button 					 number
buttons 				 number
clientX 				 number
clientY 				 number
ctrlKey 				 boolean
getModifierState(key) 	 boolean
pageX 					 number
pageY 					 number
screenX 				 number
screenY 				 number
shiftKey 				 boolean
如果DOM发出的是KeyboardEvent对象, 那么SyntheticEvent将会封装下列属性:
altKey 					 boolean
charCode 				 number
ctrlKey 				 boolean
getModifierState(key) 	 boolean
key 					 string
keyCode 				 number
locale 					 string
location 				 number
metaKey 				 boolean
repeat 				 	 boolean
shiftKey 				 boolean
which 					 number

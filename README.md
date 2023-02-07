# React 系统学习
## 一、React 基础
### 1、React 特点：
* 声明式设计 −React采用声明范式，可以轻松描述应用。

* 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。

* 灵活 −React可以与已知的库或框架很好地配合。

* JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

* 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

* 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。


### 2、React 的安装
可以使用 npm 进行安装，但是国内使用 npm 可能存在速度很慢，可以使用淘宝镜像 cnpm。

安装 cnpm：
```sh
npm install -g cnpm --registry=https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
```
接下来就可以使用 cnpm 安装模块了；

使用 create-react-app 快速创建 React 项目开发环境

```sh
$ cnpm install -g create-react-app
$ create-react-app <项目名>
$ cd <项目名>
$ npm start 
```

### 3、React 元素渲染
```js
<div id='element_html'></div>

const element = <p>元素渲染</p>
ReactDom.render(
 element, document.getElementById("element_html")
)
```

### 4、React jsx
我们不需要一定使用 JSX，但它有以下优点：

* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
* 它是类型安全的，在编译过程中就能发现错误。
* 使用 JSX 编写模板更加简单快速。

### 5、React 组件
```js
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
 
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```
### 6、React state(状态)

React 把组件看成试一个状态机，通过与用户交互实现不同的状态，然后渲染 UI，让用户界面和数据保持一致。
React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

例子：
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
 
ReactDOM.render(
  <Clock />,
  document.getElementById('example')
);
```

### 7、React Props
例子：
```js
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

也可以设置 defaultProps

```js
class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
 
HelloMessage.defaultProps = {
  name: 'Runoob'
};
 
const element = <HelloMessage/>;
 
ReactDOM.render(
  element,
  document.getElementById('example')
);
```

### 8、React 事件处理
点击事件：
```js
<button onClieck={clieck}> 激活按钮 </button>
```

### 9、条件渲染

```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
 
ReactDOM.render(
  // 尝试修改 isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('example')
);

```
### 10、React 列表 & Keys
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
 
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
);
```

### 11、React 组件 API
* 设置状态：setState
* 替换状态：replaceState
* 设置属性：setProps
* 替换属性：replaceProps
* 强制更新：forceUpdate
* 获取DOM节点：findDOMNode
* 判断组件挂载状态：isMounted


### 12、组件生命周期
组件的生命周期可分成三个状态：

* Mounting(挂载)：已插入真实 DOM
    * constructor(): 在 React 组件挂载之前，会调用它的构造函数。
    * getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    * render(): render() 方法是 class 组件中唯一必须实现的方法。
    * componentDidMount(): 在组件挂载后（插入 DOM 树中）立即调用。
* Updating(更新)：正在被重新渲染
    * getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
    * shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
    * render(): render() 方法是 class 组件中唯一必须实现的方法。
    * getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。
    * componentDidUpdate(): 在更新后会被立即调用。
* Unmounting(卸载)：已移出真实 DOM
    * componentWillUnmount(): 在组件卸载及销毁之前直接调用。

![image](https://lc-buhezimj.cn-e1.lcfile.com/z5n0xocYpKniX6KLpbUTJjJTyacQBOT5/B4F6A46A-66AA-4F68-9577-B78831AEC458.png)


### 13、React Refs
```js
<input ref="myInput" />

var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();
```


## 二、React 项目实践
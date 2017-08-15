# React实战(二)React基础
#### 什么是react
react是facebook提供的一个开源js库,用于动态的构建用户界面
#### React特点
1. Declarative(声明式编程)
2. Component-Based(组件化)
3. Learn Once, Write Anywhere(支持服务端与客户端渲染,一次编写多处运行)
4. 高效
5. 高效数据流

#### React高效原因
1. 虚拟DOM,不总是直接操作DOM
2. 高效的DOM diff算法,最小化重绘

#### React练习
- <font color='blue'>***搭建简单环境---练习环境***</font>
1. 创建文件夹react-base
2. 在根目录文件夹中创建js文件夹
3. 将react.js react-dom.js babel.js 拷贝到js文件夹中

```javascript
<script type="text/javascript" src="../js/react.js"></script>
<script type="text/javascript" src="../js/react-dom.js"></script>
<script type="text/javascript" src="../js/babel.min.js"></script>
```
- <font color='blue'>***编写一个简单demo***</font>

```javascript
<html>
    <div id="example"></div>
    <script type="text/javascript" src="../js/react.js"></script>
    <script type="text/javascript" src="../js/react-dom.js"></script>
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">
        ReactDOM.render(
            <h1>Hello React</h1>,
            document.getElementById('example')
        );
    </script>
</html>
```
- <font color='blue'>***创建虚拟DOM***</font>

1. react提供了一些API来创建一种特别的js对象(虚拟DOM)
2. 虚拟DOM对象最终会被React创建为真实的DOM对象(操作真实DOM一操作就会刷新页面,比较慢,虚拟DOM比较快)
3. 当我们操作完虚拟DOM统一完成之后再统一的将虚拟DOM转换为真实DOM,这样就不需要频繁的刷新,所以比较快
```javascript
var elememt = React.createElement('h1', {id:'myTitle'}, 'Hello');
```
相比之下jsx语法更加的简洁,它帮助我们创建虚拟对象
- <font color='blue'>***JSX语法***</font>

1. jsx是JavaScript xml的简称
2. react 定义的一种类似于XML 的JS快展语法: XML + JS
3. 作用:用来创建react虚拟DOM对象,他不是字符串,也不是xml,他最终产生的是一个JS对象
4. 标签名任意:HTML标签或者其他标签
5. 遇到<开头的以html解析,以{开头的以js语法解析

- <font color='blue'>***Babel的作用***</font>

1. 浏览器的JS引擎是不能直接解析JSX语法的,需要Babel转义为纯的JS的代码才能运行
2. 只要使用了JSX,都要加上type="text/babel"

- <font color='blue'>***JSX和原始创建Dom对比***</font>
```javascript
<script type="text/javascript">
   var vDom1 = React.createElement('h1', {id:'myTitle'}, 'Hello DOM1');
   ReactDOM.render(
       vDom1,
       document.getElementById('example1')
   );
</script>

<script type="text/babel">
   var vDom2 = <h1 id="myTitle2">Hello DOM2</h1>;
   ReactDOM.render(
       vDom2,
       document.getElementById('example2')
   );
</script>
```
- <font color='blue'>***React demo1***</font>

动态的创建列表
```javascript
    <script type="text/babel">
        var arr = ['apple', 'banana', 'orange'];
        let vDom = (
            <ul>
                {
                    arr.map((name) => {
                        return <li>{name}</li>
                    })
                }
            </ul>
        );

        ReactDOM.render(
            vDom,
            document.getElementById('example1')
        );

        ReactDOM.render(
            <ul>
                {
                    arr.map(name => {
                        return <li>{name}</li>
                    })
                }
            </ul>,
            document.getElementById('example2')
        );
    </script>
```
#### React组件Component
React核心就是组件,最终会将组件转换为标签
- <font color='blue'>***组件的定义***</font>

1.工厂函数,简单的组件推荐使用,直接返回标签
```javascript
function MyComponent1() {
    return <h1>Hello</h1>;
}
```
2.ES6推荐使用,复杂组件推荐使用
```javascript
class MyComponent extends  React.Component {
    render() {
        return (
            <h1>
                Hello
            </h1>
        );
    }
}
```
3.ES5老语法,不推荐
```javascript
var MyComponent = React.createClass({
   render() {
       return (
           <h1>
               Hello
           </h1>
       );
   }
});
```
- <font color='blue'>***组件定义练习1***</font>

```javascript
<script type="text/babel">
    function MyComponent1() {
        return (
            <h1>Hello React Component1</h1>
        );
    }

    ReactDOM.render(
        <MyComponent1/>,
        document.getElementById('example1')
    );
</script>
```
- <font color='blue'>***组件定义练习2***</font>

```javascript
class MyComponent2 extends React.Component {
    render() {
        return (
            <h1>
                Hello React Component2
            </h1>
        );
    }
}

ReactDOM.render(
    <MyComponent2/>,
    document.getElementById('example2')
);
```
- <font color='blue'>***组件定义特点***</font>

1. React标签的首字母必须大写.
2. React标签必须要有结束标签.
3. 虚拟DOM元素必须要有一个根元素.
- <font color='blue'>***组件创建流程***</font>

1. React内部会创建实例对象,出了简单组件创建方法
2. 得到虚拟DOM并解析为真实DOM
3. 插入到指定的元素内部

#### 组件三大属性之一 props属性
- <font color='blue'>***props属性解析***</font>

1. 每个组件都会有一个props(properties简写)属性
2. 组件标签的所有属性都保存在props属性中
3. 内部读取props属性时:this.props,因为我们设置的props都是存在于当前组件对象中,而this就代表当前组件对象的引用
4. 通过组件外向组件内传递数据(只读)
- <font color='blue'>***props属性案例实现***</font>

```javascript
<script type="text/babel">
    //定义一个员工组件
    class EmployeeInfo extends React.Component {
        render() {
            const {name, age, sex} = this.props;
            return (
                <ul>
                    <li>姓名:{name}</li>
                    <li>年龄:{age}</li>
                    <li>性别:{sex}</li>
                </ul>
            );
        };
    }

    /**
     * 设置组件的默认属性值
     *
     * @type {{sex: string, age: number}}
     */
    EmployeeInfo.defaultProps = {
        sex: '女',
        age: 18
    };

    /**
     * 对属性进行类型和必要性的限制
     *
     * @type {{name, age: (*), sex: (*)}}
     */
    EmployeeInfo.PropTypes = {
        name: React.PropTypes.string.isRequired, //string类型必须
        age: React.PropTypes.number, //number 可选
        sex: React.PropTypes.string //string 可选
    };

    let employee = {
        name: '张三',
        age: 23,
        sex: '男'
    };
    ReactDOM.render(
        <EmployeeInfo name={employee.name} age={employee.age} />,
        document.getElementById('example1')
    );

    ReactDOM.render(
        <EmployeeInfo {...employee} />,
        document.getElementById('example2')
    );

    var arr1 = [1,2,3];
    var arr2 = [0, ...arr1, 4];
</script>
```
- <font color='blue'>***props属性设置默认值***</font>

我们通过defaultProps 属性设置
```javascript
/**
 * 设置组件的默认属性值
 *
 * @type {{sex: string, age: number}}
 */
EmployeeInfo.defaultProps = {
    sex: '女',
    age: 18
};
```
- <font color='blue'>***props属性设置限制***</font>

PropTypes对props传入的属性进行限制
```javascript
/**
 * 对属性进行类型和必要性的限制
 *
 * @type {{name, age: (*), sex: (*)}}
 */
EmployeeInfo.PropTypes = {
    name: React.PropTypes.string.isRequired, //string类型必须
    age: React.PropTypes.number, //number 可选
    sex: React.PropTypes.string //string 可选
};
```
- <font color='blue'>***props设置多个属性***</font>

{...employee}可变参数进行设置属性
```javascript
let employee = {
    name: '张三',
    age: 23,
    sex: '男'
};
ReactDOM.render(
    <EmployeeInfo {...employee} />,
    document.getElementById('example2')
);
```
第二种语法
```javascript
var arr1 = [1,2,3];
var arr2 = [0, ...arr1, 4];
```
- <font color='blue'>***构造函数,当我们创建组件对象的时候调用构造函数***</font>

```javascript
constructor(props) {
    super(props);
    console.log(props);
}
```
#### Composing组合组件
创建一个输出welcome的组件,然后循环遍历输出名称:
```javascript
<script type="text/babel">

    function Welcome({name}) {
        return (
            <h1>Welcome {name}</h1>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <div>
                    {
                        this.props.names.map(name => {
                            return <Welcome name={name}/>;
                        })
                    }
                </div>
            );
        }
    }

    let names = ['JACK', 'TOM', 'TAOQI', 'ROSE'];
    ReactDOM.render(
        <App names={names}/>,
        document.getElementById('example1')
    );
</script>
```
#### 组件的三大属性之二refs(references)属性
1. 组件内的标签都可以定义ref属性来标识自己
2. 在组建中可以通过this.refs.refName来得到真实的DOM对象
3. 事件处理使用的是onXxx属性指定组件的处理函数(React使用的是自定义的事件,而不是使用DOM事件,React中的事件是委托机制,委托给最外层的元素)

<font color='blue'>***this绑定***</font>
1. 通过箭头函数进行this的绑定,因为箭头函数不产生新的this,使用的是外部的this
2. 手动绑定
```javascript
constructor(props) {
    super(props);

    //强制绑定this
    this.showMsg = this.showMsg.bind(this);
}
```
- <font color='blue'>***通过事件获取对象***</font>

```javascript
render() {
     return (
         <div>
             <input type="text" ref="msg"/>
             <button onClick={this.showMsg}>提示输入数据</button>
             <input type="text" placeholder="失去焦点提示数据" onBlur={this.showMsg2}/>
         </div>
     );
 }

/**
 * 通过event.target获取对象
 *
 * @param event
 */
showMsg2(event) {
    alert(event.target.value);
}
```
实战代码01
```javascript
<script type="text/babel">
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);

            //强制绑定this
            this.showMsg = this.showMsg.bind(this);
        }
        render() {
            return (
                <div>
                    <input type="text" ref="msg"/>
                    <button onClick={this.showMsg}>提示输入数据</button>
                    <input type="text" placeholder="失去焦点提示数据" onBlur={this.showMsg2}/>
                </div>
            );
        }
       /**
        * this绑定
        *
        * @param event
        */
       showMsg(event) {
           let input = this.refs.msg;
           alert(input.value);
       };

       /**
        * 通过event.target获取对象
        *
        * @param event
        */
       showMsg2(event) {
           alert(event.target.value);
       }
    }

    ReactDOM.render(
        <MyComponent/>,
        document.getElementById('example1')
    );
</script>
```
#### 组件的三大属性之三state属性
实战demo1
```javascript
<script type="text/babel">
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLikeMe: true,
            };

            this.changeState = this.changeState.bind(this);
        }

        render() {
            let text = this.state.isLikeMe ? '你喜欢我' : '我喜欢你';
            return (
                <h1 onClick={this.changeState}>{text}</h1>
            );
        }

        changeState(event) {
            this.setState({isLikeMe: !this.state.isLikeMe});
        }
    }

    ReactDOM.render(
        <MyComponent/>,
        document.getElementById('example1')
    );
</script>
```
#### State属性练习
开发一个可以添加练习项的List列表
```htmlbars
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <script type="text/javascript" src="../js/react.js"></script>
    <script type="text/javascript" src="../js/react-dom.js"></script>
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <div id="example"></div>

    <script type="text/babel">
        class TodoList extends React.Component {
            render() {
                return (
                    <ul>
                        {
                            this.props.todos.map((value, index) => {
                                return (
                                    <li key={index}>
                                        {value}
                                    </li>
                                );
                            })
                        }
                    </ul>
                );
            }
        }

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    todos: ['吃饭', '睡觉', '打豆豆'],
                }
            }

            render() {
                return (
                    <div>
                        <h1>PLEASE ADD YOUR TODOS!</h1>
                        <input type="text" ref="todoText"/>
                        <button onClick={this.addTodo.bind(this)}>添加第{this.state.todos.length + 1}个</button>
                        <TodoList todos={this.state.todos}/>
                    </div>
                );
            }

            /**
             * 添加列表方法
             */
            addTodo() {
                let todoValue = this.refs.todoText.value;
                if (!todoValue) {
                    return;
                }

                let todoList = this.state.todos;
                todoList.unshift(todoValue);
                this.setState({
                    todos: todoList,
                });

                this.refs.todoText.value = '';
            }
        }

        ReactDOM.render(
            <App/>,
            document.getElementById('example')
        );
    </script>
</html>
```
#### React生命周期
![enter image description here](http://oayt7zau6.bkt.clouddn.com/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)
<font color='blue'>***组件的三个生命周期状态***</font>
1. Mount:插入真实的DOM
2. Update:被重新渲染
3. Unmount:被移除真实DOM

<font color='blue'>***React为每个状态都提供了两种钩子(hook/回调函数),will在进入状态之前调用,did在进入状态之后调用***</font>
1. componentWillMount() :页面渲染前,在render之前(只调用一次)
2. componentDidMount():页面加载后执行,在render之后(只调用一次)
3. componentWillUpdate():状态更新时调用,render前(调用多次)
4. componentDidUpdate()组件更新完调用render后(调用多次)
5. componentWillUnmount():组件将要移除

#### React组件练习
```javascript
<script type="text/babel">
    class AnimateComponent extends React.Component {
        constructor(props) {
            super();
            this.state = {
                opacity: 1.0,
            };
        }

        render() {
            return (
                <h1 style={{opacity: this.state.opacity, color: 'red'}}>{this.props.msg}</h1>
            );
        }

        componentDidMount() {
            setInterval(() => {
                let opacity = this.state.opacity;
                opacity -= 0.5;
                if (opacity <= 0) {
                    opacity = 1.0;
                }

                this.setState({
                    opacity: opacity,
                });
            }, 200);
        }
    }

    ReactDOM.render(
        <AnimateComponent msg="Hello React" />,
        document.getElementById('example')
    );
</script>
```
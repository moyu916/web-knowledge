## nodejs简单入门

### node是什么

Node是一个基于Chrome V8引擎的JavaScript代码运行环境。Node.js是由ECMAScript及Node 环境提供的一些附加API组成的，包括文件、网络、路径等等一些更加强大的 API

所有ECMAScript语法在Node环境中都可以使用。在Node环境下执行代码，使用Node命令执行后缀为.js的文件即可。eg:  node test.js

**node全局对象**

在浏览器中全局对象是window，在Node中全局对象是global。Node中全局对象下有以下方法，可以在任何地方使用，global可以省略。

console.log()     在控制台中输出
setTimeout()     设置超时定时器
clearTimeout()  清除超时时定时器
setInterval()      设置间歇定时器
clearInterval()   清除间歇定时器

### npm是什么

npm (node package manager) ： node的第三方模块管理工具

### npm init命令有什么作用

这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

有了package.json文件，直接使用npm install命令，就会在当前目录中安装所需要的模块。

### node_modules有什么作用

### package.json有什么作用
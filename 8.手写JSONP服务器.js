// 导入 http 内置模块
const http = require("http");

//
const urlModule = require("url");

// 创建一个 http 服务器
const server = http.createServer();

// 监听 http 服务器的 request 请求
server.on("request", function (req, res) {
    // const url = req.url;
    const { pathname:url, query } =urlModule.parse(req.url, true);

    if (url === "/getscript"){
        // 拼接一个合法的Js脚本，这里拼接的是一个方法的调用
        // var scriptStr = "show()";

        var data = {
            name: "ddd",
            gender: "男",
            age: 18
        };

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`;

        // res.end 发送给 客户端， 客户端会把这个字符串当作Js代码去执行
        res.end(scriptStr)
    } else {
        res.end("404")
    }

});

// 指定端口号并启动服务器监听
server.listen(3000, function () {
    console.log("server listen at http://127.0.0.1:3000")
});



// <!--注意:此页面需要:
//             1.npm install -g nodemon
//             2.nodemon ./8.手写JSONP服务器.js
// -->

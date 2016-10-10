/**
 * Created by CNY on 2016/10/10.
 */
define(function (require,exports,module) {
    var a = require('./a');//测试基本的模块引用
    //var a = require('../js2/a');//测试模块引用路径问题，注意同路径下用./ 而不能直接用/
    var m1 = require('m1');//测试别名
    //exports.m1Data=m1.data;
    exports.m1Data=m1.data;
    var data = a.x + 5;
    exports.data=data;
});
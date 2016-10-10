/**
 * Created by CNY on 2016/10/10.
 */
define(function (require,exports,module) {
    var data = '这是a模块里的数据';
    module.exports = {x: 12, y: 13};
    module.exports.data=data;
});
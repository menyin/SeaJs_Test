/**
 * Created by CNY on 2016/11/24.
 */
define(function (require, exports, module) {
    module.exports=Person;
    function Person() {
    }
    Person.showType= function () {
        alert('我是一个中国人');
    };
    Person.prototype.showName= function () {
        alert(this.name);
    };
});

/**
 * Created by CNY on 2016/11/24.
 */
define(function (require, exports, module) {
    var Person = require('./person');
    function Student() {
        //this.name = '学生';
        //Person.call(this);
    }
    Student.prototype = new Person();
    module.exports=Student;

});

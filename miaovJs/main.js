/**
 * Created by CNY on 2016/10/10.
 */
define(function (require,exports,module) {
    //1.做一些页面公共的动画

    //2.做一些点击导航菜单后的动画
    var aLi = $('ul li');
    var aDiv = $('.content div');
    window.onhashchange= function () {
        window.location.reload();
    };
    var showModel = require('./show');
    var hideModel = require('./hide');
    showModel.show(aLi,aDiv);
    hideModel.hide(aLi,aDiv);


});
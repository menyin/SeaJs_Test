/**
 * Created by CNY on 2016/10/10.
 */
define(function (require, exports, module) {
    var showModel = require('./show');
    function hide(aLi,aDiv) {
        var hash=window.location.hash.substring(1)||'index'
        aLi.click(function () {
            var index = $(this).index();
            aDiv.each(function () {
                if (this.dataset.hash==hash) {
                    $(this).hide();
                }
                console.log(index);
                console.log(aLi.get(index));
                window.location.hash=aLi.get(index).dataset.hash;
                setTimeout(function () {
                    showModel.show();
                },1000);
            });
        });
    }
    exports.hide = hide;
});

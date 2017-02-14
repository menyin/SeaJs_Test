/**
 * Created by CNY on 2016/10/10.
 */
define(function (require,exports,module) {
    function show(aLi,aDiv) {
        var hash = window.location.hash.substring(1)||'index';
        aDiv.each(function () {
            if (this.dataset['hash']==hash) {
                $(this).show();
            }
        });
    }
    exports.show = show;
});
/**
 * Created by mapbar_front on 2018/6/2.
 */

const Songs = (function () {
    var listData = [];





    return function (initDOM) {
        var reg_id = /^#\w+/,reg_class = /^.\w+/,dom;
        console.log(reg_id.test('#aa'));
        if(reg_id.test(initDOM)) dom = document.querySelector(RegExp.$1);
        if(reg_class.test(initDOM)) dom = document.querySelector(RegExp.$1);
        console.log(dom);

    }
})();
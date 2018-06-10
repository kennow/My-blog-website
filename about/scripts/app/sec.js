/**
 * Created by mapbar_front on 2018/6/10.
 */
function formatTime(time,str) {
    var thisTime = time || new Date();
    var year = thisTime.getFullYear();
    var month = thisTime.getMonth();
    var date = thisTime.getDate();
    var hour = thisTime.getHours();
    var minutes = thisTime.getMinutes();
    var seconds = thisTime.getMilliseconds();
    console.log(year,month,date,hour,minutes,seconds);
}
define(function (require, exports, module) {
    var third = require('./third');
    third();
    module.exports.action = function () {
        console.log(22);
    }
});

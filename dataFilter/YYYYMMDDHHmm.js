//permission.js
import Vue from 'vue';
var moment = require('moment');
// 注册
Vue.filter('$_YYYYMMDDHHmm', function (value) {
    // 返回处理后的值
    return value ? moment(value).format('YYYY-MM-DD HH:mm') : '';
})

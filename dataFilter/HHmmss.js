//permission.js
import Vue from 'vue';
var moment = require('moment');
// 注册
Vue.filter('$_HHmmss', function (value) {
    // 返回处理后的值
    return value ? moment(value).format('HH:mm:ss') : ''
})

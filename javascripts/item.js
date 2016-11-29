/**
 * Created by ChenChao on 2016/11/28.
 */

"use strict";

define(function () {
    return function (type) {
        return {
            data: function () {
                return {
                    data: [],
                    version: '2.69'
                };
            }
            ,
            template: $('#' + type + '-table').html(),
            created: function () {
                var _this = this;
                $.get('data/' + type + '.json', function (data) {
                    _this.data = data;
                }, 'json')
            },
            methods: {
                sort: function () {
                    //
                }
            }
        }
    };
});
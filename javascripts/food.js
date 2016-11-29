/**
 * Created by ChenChao on 2016/11/28.
 */

"use strict";

define(function () {
    return {
        data: function () {
            return {
                data: [],
                version: '2.69'
            };
        },
        template: $('#food-table').html(),
        created: function () {
            var _this = this;
            $.get('data/food.json', function (data) {
                _this.data = data;
            }, 'json')
        },
        methods: {
            sort: function () {
                //
            }
        }
    };
});
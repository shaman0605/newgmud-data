/**
 * Created by ChenChao on 2016/11/28.
 */

"use strict";

define(function () {

    return function (version, type) {
        return {
            data: function () {
                return {
                    data: [],
                    version: version,
                    sortPrototype: '',
                    isAsc: false
                };
            }
            ,
            template: $('#' + type + '-table').html(),
            created: function () {
                var _this = this;
                $.get('data/' + type + '.json?v=' + +new Date(), function (data) {
                    _this.data = data;
                }, 'json')
            },
            methods: {
                sort: function (type) {
                    var v = this.version;
                    this.sortPrototype = type;
                    this.isAsc = !this.isAsc;
                    var isAsc = this.isAsc;
                    this.data = this.data.sort(function (item1, item2) {
                        var data1 = item1[v];
                        var data2 = item2[v];
                        var value1 = parseInt(data1[type]);
                        var value2 = parseInt(data2[type]);
                        console.log(value1, value2)
                        if(value1 > value2){
                            return isAsc ? 1 : -1;
                        }
                        if(value1 < value2){
                            return isAsc ? -1 : 1;
                        }
                        return 0;
                    });
                }
            }
        }
    };
});
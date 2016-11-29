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
                $.get('data/' + type + '.json', function (data) {
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
                        if(data1[type] > data2[type]){
                            return isAsc ? 1 : -1;
                        }
                        if(data1[type] < data2[type]){
                            return isAsc ? -1 : 1;
                        }
                        return 0;
                    });
                }
            }
        }
    };
});
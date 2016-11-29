/**
 * Created by ChenChao on 2016/11/28.
 */

requirejs(['item'], function (item) {
    var router = new VueRouter({
        routes: [
            { path: '/npc', component: item('npc') },
            { path: '/food', component: item('food') },
            { path: '/drug', component: item('drug') },
            { path: '/weapon', component: item('weapon') },
            { path: '/equip', component: item('equip') },
            { path: '/h_weapon', component: item('h_weapon') },
            { path: '/skill', component: item('skill') },
            { path: '/other', component: item('other') }
        ]
    });

    Vue.filter('weaponType', function (type) {
        return ['刀', '剑', '拳套', '鞭', '杖', '棍'][type];
    });
    Vue.filter('equipType', function (type) {
        return ['帽子', '披风', '饰品', '鞋子', '护甲', '腰带', '衣服'][type];
    });
    Vue.filter('otherType', function (type) {
        return ['未分类', '秘籍'][type];
    });

    new Vue({
        router: router,
        data: {
            version: "v2.69"
        }
    }).$mount('#app');
});
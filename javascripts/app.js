/**
 * Created by ChenChao on 2016/11/28.
 */

requirejs(['item'], function (item) {
    var router = new VueRouter({
        routes: [
            { path: '/npc', component: item('npc') },
            { path: '/food', component: item('food') },
            { path: '/drug', component: item('drug') },
            { path: '/weapon', component: item('weapon') }
        ]
    });

    Vue.filter('weaponType', function (type) {
        return ['刀', '剑', '拳套', '鞭', '杖', '棍'][type];
    });

    new Vue({
        router: router,
        data: {
            version: "v2.69"
        }
    }).$mount('#app');
});
/**
 * Created by ChenChao on 2016/11/28.
 */

requirejs(['npc', 'food'], function (npc, food) {
    var router = new VueRouter({
        routes: [
            { path: '/npc', component: npc },
            { path: '/food', component: food }
        ]
    });
    new Vue({
        router: router,
        data: {
            version: "v2.69"
        }
    }).$mount('#app');
});
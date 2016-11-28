/**
 * Created by ChenChao on 2016/11/28.
 */

requirejs(['npc'], function (npc) {
    var router = new VueRouter({
        routes: [
            { path: '/npc', component: npc }
        ]
    });
    new Vue({
        router: router,
        data: {
            version: "v2.69"
        }
    }).$mount('#app');
});
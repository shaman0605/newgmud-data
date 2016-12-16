/**
 * Created by ChenChao on 2016/11/28.
 */

requirejs([
    'item',
    'text!../template/index.html',
    'text!../template/commit.html'
], function (item, indexTpl, commitTpl) {

    var version = '2.69';

    var router = new VueRouter({
        routes: [
            { path: '/index', component: {
                template: indexTpl
            } },
            { path: '/commit', component: {
                template: commitTpl
            } },
            { path: '/npc', component: item(version, 'npc') },
            { path: '/food', component: item(version, 'food') },
            { path: '/drug', component: item(version, 'drug') },
            { path: '/weapon', component: item(version, 'weapon') },
            { path: '/equip', component: item(version, 'equip') },
            { path: '/h_weapon', component: item(version, 'h_weapon') },
            { path: '/skill', component: item(version, 'skill') },
            { path: '/other', component: item(version, 'other') },
            { path: '/reinforcement', component: item(version, 'reinforcement') }
        ]
    });

    Vue.filter('weaponType', function (type) {
        return ['刀', '剑', '拳套', '鞭', '杖', '棍', '弩'][type];
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
            version: version
        }
    }).$mount('#app');
});
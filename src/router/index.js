import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Index from '@/page/index';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: resolve => require(['@/page/index'], resolve)
	}, {
		path: '/hello',
		name: 'Hello',
		component: resolve => require(['@/components/Hello'], resolve)
	}]
})
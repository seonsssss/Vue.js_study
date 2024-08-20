import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import VwordView from '../views/VwordView.vue';
import VwordMockServerView from '../views/VwordMockServerView.vue';
import EventView from '../views/EventView.vue';
import ComputedView from '../views/ComputedView.vue';
import WatchView from '../views/WatchView.vue';
import MemoView from '../views/MemoView.vue';
import NestedComponent from '../views/NestedComponent.vue';
import ParentComponent from '../views/ParentComponent.vue';
import SlotModalLayoutView from '../views/SlotModalLayoutView.vue';
import ProvideInject from '../views/ProvideInject.vue';
import MemoComponentsView from '../views/MemoComponentsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/vword',
    name: 'vword',
    component: VwordView
  },
  {
    path: '/vwordMock',
    name: 'vwordMock',
    component: VwordMockServerView
  },
  {
    path: '/event',
    name: 'event',
    component: EventView
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedView
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView
  },
  {
    path: '/memo',
    name: 'memo',
    component: MemoView
  },
  {
    path: '/nestedcomponent',
    name: 'nestedcomponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'parentcomponent',
    component: ParentComponent
  },
  {
    path: '/slotmodallayout',
    name: 'slotmodallayout',
    component: SlotModalLayoutView
  },
  {
    path: '/provideinject',
    name: 'provideinject',
    component: ProvideInject
  },
  {
    path: '/memocomponents',
    name: 'memocomponents',
    component: MemoComponentsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

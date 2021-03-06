import style from './style.scss';
import Vue from 'vue'
import VueRouter from 'vue-router';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact/contact';
import CarCenter from './pages/car-center/car-center';
import theKillingWord from './pages/theKillingWord/App';
import pukiAir from './pages/pukiAirline/App';

// Components
import MainNav from './components/main-nav';
// import AppFooter from './components/app-footer';

Vue.use(VueRouter);

const routes = [
      {
        path: '/',
        component: Home
      },
      {
        path: '/contact',
        component: Contact
      },
      {
        path: '/car-center',
        component: CarCenter
      },

      {
        path: '/about',
        component: About
      },
      {
        path: '/Killing-Word',
        component: theKillingWord
      },
      {
        path: '/pukiAir',
        component: pukiAir
      }
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router,
  components: {
    'main-nav': MainNav,
    // 'app-footer': AppFooter
  }
}).$mount('#app')
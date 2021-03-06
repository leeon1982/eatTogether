import Vue from 'vue'
import Router from 'vue-router'
import logandreg from '@/pages/logandreg'
import main from '@/pages/main'
import registered from '@/pages/registered'
import login from '@/pages/login'
import appointment from '@/pages/appointment'
import myself from '@/pages/myself'
import updataHead from '@/pages/updataHead'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		name: 'main',
  		component: main
  	},
    {
    	path: '/logandreg',
    	name: 'logandreg',
    	component: logandreg
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: appointment
    },
    {
      path: '/myself',
      name: myself,
      component: myself
    },
    {
      path: '/updataHead',
      name: updataHead,
      component: updataHead
    }
  ]
})

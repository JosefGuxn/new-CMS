export default [
  {
    path: '/login',
    name: 'Login',
    component: require('components/Login')
  },
  {
    path: '/main',
    name: 'Main',
    component: require('components/Main'),
    children: [
      {
        path: 'consultation',
        component: require('components/Consultation')
      }
    ]
  },
  {
    path: '*',
    redirect: '/login'
  }
]

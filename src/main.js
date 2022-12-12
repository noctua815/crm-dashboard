import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'

import {library}                                              from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faCreditCard,
  faChartSimple,
  faGear,
  faBurst,
  faEllipsis,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon}                                      from '@fortawesome/vue-fontawesome'
import './styles/main.scss'

library.add(faHome, faCreditCard, faChartSimple, faGear, faBurst, faEllipsis, faAngleDown)
const app = createApp(App)

app.use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

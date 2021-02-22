import { App } from 'vue'
import HCountup from './HCountup/index.vue'

const components = [
  HCountup
]

export default {
  install: (app: App) => {
    components.forEach(comp => {
      app.component(comp.name, comp)
    })
  }
}

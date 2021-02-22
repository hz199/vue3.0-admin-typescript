import { App } from 'vue'
import HCountup from './HCountup/index.vue'

const components = {
  HCountup
} as {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key])
    }
  }
}

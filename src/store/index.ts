import { InjectionKey } from 'vue'
import { createStore, createLogger, Store as VuexStore, useStore as baseUseStore } from 'vuex'
import modules, { RootState } from './modules'

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [
  createLogger({
    collapsed: true,
    // filter(mutation) {
    //   console.log(mutation, 11155)
    //   return true
    // },
    // transformer(globalState) {
    //   return globalState
    // },
    // mutationTransformer(mutation) {
    //   return mutation.type
    // },
  })
] : []

const store = createStore({
  modules,
  strict: true,
  plugins
})

export const storeKey: InjectionKey<VuexStore<RootState>> = Symbol()

export function useStore() {
  return baseUseStore(storeKey)
}

export default store
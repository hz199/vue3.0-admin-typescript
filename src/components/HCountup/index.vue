<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'

interface HCountupData {
  instance: CountUp | null
}

const typeOf = (type: string) => (object: unknown) => Object.prototype.toString.call(object) === `[object ${type}]`

const isFunction = typeOf('Function')

export default defineComponent({
  name: 'HCountup',
  render () {
    return h('span')
  },
  props: {
    options: {
      type: Object as PropType<CountUpOptions>,
      required: false,
      default: {}
    },
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      instance: null
    } as HCountupData
  },
  methods: {
    init () {
      const instance = new CountUp(this.$el, this.value, this.options)
      if (instance.error) {
        return
      }

      this.instance = instance

      this.instance.start()
    },
    update(newEndVal: number) {
      if (this.instance && isFunction(this.instance.update)) {
        return this.instance.update(newEndVal)
      }
    }
  },
  watch: {
    value (val) {
      this.update(val)
    }
  },
  beforeUnmount () {
    this.instance = null
  },
  mounted () {
    this.init()
  }
})

</script>
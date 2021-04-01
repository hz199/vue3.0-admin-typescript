<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    routerPath: {
      type: String,
      // required: true
    },
    type: {
      type: String,
      default: () => 'default'
    }, // 目前支持 default primary
    text: {
      type: [String, Number],
      required: true,
    },
    onTap: {
      type: Function,
      default: () => null,
    },
    closable: {
      type: Boolean,
      default: () => false,
    },
    onClose: {
      type: Function,
      default: () => null,
    },
    tagItem: Object
  },
  render() {
    return (
      <div
        class="nav-tag"
        onClick={() => {
          this.onTap && this.onTap(this.routerPath)
        }}
      >
        <span
          class={`nav-tag__dot nav-tag__dot--${this.type || 'default'}`}
        ></span>
        <span class="nav-tag__text">{this.text}</span>
        <span class="nav-tag__close-wrapper">
        {
          this.closable ? <i class="el-icon-close" onClick={(e) => {
            e.stopPropagation()
            // e.preventDefault()
            this.onClose && this.onClose(this.tagItem)
          }} /> : null
        }
        </span>
      </div>
    );
  },
})
</script>
<style lang="scss">
$tag-size: 28px;
@import '@/styles/vars';

// tag
.nav-tag {
  // box-sizing: border-box;
  display: inline-block;
  height: $tag-size;
  line-height: $tag-size;
  padding: 0 8px;
  border: $h--border-width solid #e8eaec;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: middle;
  opacity: 1;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;

  &__text {
    color: #515a6e;
    font-size: 12px;
    line-height: $tag-size;
    vertical-align: 1px;
    user-select:none;
  }

  &__close {
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #cacaca;
    margin-left: 10px;
    vertical-align: -1px;
  }

  &__dot {
    height: 12px;
    width: 12px;
    line-height: $tag-size;
    color: #515a6e;
    display: inline-block;
    border-radius: 50%;
    margin-right: 8px;
  }
  &__close-wrapper {
    // display: inline-block;
    margin-left: 5px;
    color: #b8b8b8;
    vertical-align: 1px;
  }
  &__close-wrapper:hover{
    transform: scale(1.1);
    color: $--color-primary;
  }

  &__dot--default {
    background: #e8eaec;
  }

  &__dot--primary {
    background: $--color-primary;
  }
}
</style>
<template>
<div
  class="arrangements-side"
  :style="{
    width: width,
    height: height,
  }"
  :class="[
    `align-items-${align}`,
    `justify-content-${justify}`,
    `arrangements-spacing-${spacing}`,
    `flex-${direction}`,
    wrap ? 'flex-wrap' : 'flex-nowrap',
    reverse ? 'flex-column-reverse' : null,
    bordered ? 'arrangements-bordered' : null,
  ]"
>
  <slot></slot>
</div>
</template>

<script>
import { choices } from '@/utils'
import { display } from '@/constants'

export default {
  props: {
    justify: {
      type: String,
      default: display.JUSTIFY_START,
      validator: choices([
        display.JUSTIFY_START,
        display.JUSTIFY_END,
        display.JUSTIFY_CENTER,
        display.JUSTIFY_BETWEEN,
        display.JUSTIFY_AROUND,
        display.JUSTIFY_EVENLY,
      ]),
    },
    align: {
      type: String,
      default: display.ALIGN_START,
      validator: choices([
        display.ALIGN_START,
        display.ALIGN_END,
        display.ALIGN_CENTER,
        display.ALIGN_BASELINE,
        display.ALIGN_STRETCH,
      ]),
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: display.DIRECTION_ROW,
      validator: choices([
        display.DIRECTION_ROW,
        display.DIRECTION_ROW_REVERSE,
      ]),
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: String,
      default: display.SIZE_SMALL,
      validator: choices([
        display.NONE,
        display.SIZE_LARGE,
        display.SIZE_SMALL,
      ]),
    },
  },
}
</script>

import { buildProps, booleanProp, booleanStringProp, eventProp } from '@vexip-ui/config'

import type { PropType, ExtractPropTypes } from 'vue'
import type { ConfigurableProps } from '@vexip-ui/config'

export const overflowProps = buildProps({
  items: Array as PropType<any[]>,
  tag: String,
  attrFlag: booleanStringProp,
  static: booleanProp,
  onRestChange: eventProp<(rest: number) => void>(),
  onToggle: eventProp<(overflow: boolean) => void>()
})

export type OverflowProps = ExtractPropTypes<typeof overflowProps>
export type OverflowCProps = ConfigurableProps<OverflowProps, 'items'>
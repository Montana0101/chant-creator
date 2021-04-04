import { core } from '@chant/common/utils'
import { AnyObject } from '@/type'

export default {
  // 单位添加px
  toPx(style: AnyObject) {
    const unit = [
      'borderRadius',
      'borderWidth',
      'fontSize',
      'height',
      'left',
      'letterSpacing',
      'margin',
      'padding',
      'top',
      'width'
    ]
    const tpl = core.clone(style)
    for (let item in tpl) {
      if (unit.includes(item)) {
        tpl[item] = `${style[item]}px`
      }
    }
    return tpl
  }
}

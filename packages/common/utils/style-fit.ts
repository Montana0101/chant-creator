import core from './core'

export default {
  // 单位添加px
  toPx(style: Record<string, any>) {
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

export default [
  {
    component: 'chant-img',
    label: '图片',
    layout: true,
    events: {},
    style: {
      width: '100%'
    }
  },
  {
    component: 'chant-button',
    label: '按钮',
    events: {},
    style: {
      fontSize: 16,
      fontWeight: 'normal',
      height: 44,
      width: 345
    }
  },
  {
    component: 'chant-field',
    label: '输入框',
    events: {},
    style: {
      fontSize: 16,
      fontWeight: 'normal',
      height: 44
    }
  },
  {
    component: 'chant-swipe',
    label: '轮播图',
    events: {},
    attr: { autoplay: 3000, loop: true, vertical: false },
    style: {
      borderRadius: 0,
      height: 110
    }
  },
  {
    component: 'chant-text',
    label: '文本',
    layout: true,
    events: {},
    style: {
      display: 'inline-block',
      fontSize: '16',
      fontWeight: 'normal',
      padding: '5'
    }
  }
]

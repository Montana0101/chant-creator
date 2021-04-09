export default [
  // 轮播图
  {
    component: 'chant-swipe',
    label: '轮播图',
    events: {},
    attr: {
      autoplay: 3000,
      loop: true,
      vertical: false,
      imgList: [
        { url: 'xxx', title: '标题1', describe: '描述1' },
        { url: 'xxx', title: '标题2', describe: '描述2' }
      ]
    },
    style: {
      borderRadius: 0,
      height: 110,
      margin: 0,
      padding: 0
    }
  },
  // 图片
  {
    component: 'chant-img',
    label: '图片',
    layout: true,
    events: {},
    style: {
      width: '100%'
    }
  },
  // 按钮
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
  // 输入框
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
  // 文本
  {
    component: 'chant-text',
    label: '文本',
    layout: true,
    events: {},
    style: {
      display: 'inline-block',
      fontSize: 16,
      fontWeight: 'normal',
      padding: 5
    }
  }
]

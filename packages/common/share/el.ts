const el = {
  dom(selector: string): HTMLElement {
    const node = document.querySelector(selector) as HTMLElement
    return node
  }
}

export default el

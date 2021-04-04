export type AnyObject = {
  [key: string]: any
}

export type NavMenuConfig = {
  component: string
  label: string
  layout: boolean
  child: []
  events: object
  attr: object
  style: object
}

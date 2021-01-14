
export interface TagItems {
  path: string
  title: string
  flag?: boolean
  type?: 'primary' | 'default' | '',
  ref?: 'currentTagPage' | ''
}

export interface NavsTagState {
  tagItems: TagItems[]
  tagPaths: string[]
  currentRoute: string
}
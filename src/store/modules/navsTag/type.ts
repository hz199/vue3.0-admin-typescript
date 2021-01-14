
export interface TagItems {
  path: string
  title: string
  flag?: boolean
  type?: 'primary' | 'default' | ''
}

export interface NavsTagState {
  tagItems: TagItems[]
  tagPaths: string[]
  currentRoute: string
}
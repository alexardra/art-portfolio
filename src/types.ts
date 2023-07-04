import type { themes, workTypesList } from './constants'

export type Project = {
  id: number
  thumbnail: string
  title: string
  description: string
  preview: string
  role: string
  author: string
  items: WorkItem[]
}

export type WorkItem = {
  id: string
  type: (typeof workTypesList)[number]
  src: string
}

export type Theme = (typeof themes)[number]

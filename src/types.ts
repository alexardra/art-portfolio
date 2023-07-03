import type { themes, workTypesList } from './constants'

export type Project = {
  id: number
  thumbnail: string
  title: string
  description: string
  preview: string
  role: string
  author: string
  works: Work[]
}

export type Work = {
  type: (typeof workTypesList)[number]
  details: WorkDetails
}

export type WorkDetails = {
  src: string
  width?: number
  height?: number
}

export type Theme = (typeof themes)[number]

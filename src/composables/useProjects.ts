import type { Project } from '@/types'

export async function useProjects(): Promise<Project[]> {
  let projects: Project[] = []

  let storage = localStorage.getItem('projects')

  if (storage !== null) {
    projects = JSON.parse(storage) as Project[]
    return projects
  }

  const response = await fetch('/projects.json')
  projects = (await response.json()) as Project[]
  localStorage.setItem('projects', JSON.stringify(projects))
  return projects
}

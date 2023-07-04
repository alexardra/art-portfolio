export function useImage(path: string) {
  return new URL(path, import.meta.url).href
}

import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $scrollTo: (element: string | HTMLElement, duration?: number, options?: object) => void
  }
}
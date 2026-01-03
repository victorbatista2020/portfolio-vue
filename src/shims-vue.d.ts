/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  import type { Component } from 'vue'
  export interface RouteRecordRaw {
    path: string
    name?: string
    component?: Component
    children?: RouteRecordRaw[]
    [key: string]: any
  }
  export function createRouter(options: {
    history: any
    routes: RouteRecordRaw[]
  }): any
  export function createWebHistory(base?: string): any
}

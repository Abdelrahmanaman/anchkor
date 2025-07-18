/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/solid-start/server'

import { Route as rootRouteImport } from './routes/__root'
import { Route as LayoutRouteImport } from './routes/_layout'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LayoutWorkspaceIdRouteImport } from './routes/_layout/$workspaceId'
import { Route as authRegisterRouteImport } from './routes/(auth)/register'
import { Route as authLoginRouteImport } from './routes/(auth)/login'
import { Route as LayoutWorkspaceIdIndexRouteImport } from './routes/_layout/$workspaceId/index'
import { Route as LayoutWorkspaceIdFeedbackIdRouteImport } from './routes/_layout/$workspaceId/$feedbackId'
import { ServerRoute as ApiPushServerRouteImport } from './routes/api/push'
import { ServerRoute as ApiAuthSplatServerRouteImport } from './routes/api/auth/$'

const rootServerRouteImport = createServerRootRoute()

const LayoutRoute = LayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const LayoutWorkspaceIdRoute = LayoutWorkspaceIdRouteImport.update({
  id: '/$workspaceId',
  path: '/$workspaceId',
  getParentRoute: () => LayoutRoute,
} as any)
const authRegisterRoute = authRegisterRouteImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRouteImport,
} as any)
const authLoginRoute = authLoginRouteImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const LayoutWorkspaceIdIndexRoute = LayoutWorkspaceIdIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutWorkspaceIdRoute,
} as any)
const LayoutWorkspaceIdFeedbackIdRoute =
  LayoutWorkspaceIdFeedbackIdRouteImport.update({
    id: '/$feedbackId',
    path: '/$feedbackId',
    getParentRoute: () => LayoutWorkspaceIdRoute,
  } as any)
const ApiPushServerRoute = ApiPushServerRouteImport.update({
  id: '/api/push',
  path: '/api/push',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiAuthSplatServerRoute = ApiAuthSplatServerRouteImport.update({
  id: '/api/auth/$',
  path: '/api/auth/$',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/$workspaceId': typeof LayoutWorkspaceIdRouteWithChildren
  '/$workspaceId/$feedbackId': typeof LayoutWorkspaceIdFeedbackIdRoute
  '/$workspaceId/': typeof LayoutWorkspaceIdIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/$workspaceId/$feedbackId': typeof LayoutWorkspaceIdFeedbackIdRoute
  '/$workspaceId': typeof LayoutWorkspaceIdIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
  '/_layout/$workspaceId': typeof LayoutWorkspaceIdRouteWithChildren
  '/_layout/$workspaceId/$feedbackId': typeof LayoutWorkspaceIdFeedbackIdRoute
  '/_layout/$workspaceId/': typeof LayoutWorkspaceIdIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/register'
    | '/$workspaceId'
    | '/$workspaceId/$feedbackId'
    | '/$workspaceId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/register'
    | '/$workspaceId/$feedbackId'
    | '/$workspaceId'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/(auth)/login'
    | '/(auth)/register'
    | '/_layout/$workspaceId'
    | '/_layout/$workspaceId/$feedbackId'
    | '/_layout/$workspaceId/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRoute: typeof LayoutRouteWithChildren
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
}
export interface FileServerRoutesByFullPath {
  '/api/push': typeof ApiPushServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesByTo {
  '/api/push': typeof ApiPushServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/api/push': typeof ApiPushServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/api/push' | '/api/auth/$'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/api/push' | '/api/auth/$'
  id: '__root__' | '/api/push' | '/api/auth/$'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  ApiPushServerRoute: typeof ApiPushServerRoute
  ApiAuthSplatServerRoute: typeof ApiAuthSplatServerRoute
}

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_layout/$workspaceId': {
      id: '/_layout/$workspaceId'
      path: '/$workspaceId'
      fullPath: '/$workspaceId'
      preLoaderRoute: typeof LayoutWorkspaceIdRouteImport
      parentRoute: typeof LayoutRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_layout/$workspaceId/': {
      id: '/_layout/$workspaceId/'
      path: '/'
      fullPath: '/$workspaceId/'
      preLoaderRoute: typeof LayoutWorkspaceIdIndexRouteImport
      parentRoute: typeof LayoutWorkspaceIdRoute
    }
    '/_layout/$workspaceId/$feedbackId': {
      id: '/_layout/$workspaceId/$feedbackId'
      path: '/$feedbackId'
      fullPath: '/$workspaceId/$feedbackId'
      preLoaderRoute: typeof LayoutWorkspaceIdFeedbackIdRouteImport
      parentRoute: typeof LayoutWorkspaceIdRoute
    }
  }
}
declare module '@tanstack/solid-start/server' {
  interface ServerFileRoutesByPath {
    '/api/push': {
      id: '/api/push'
      path: '/api/push'
      fullPath: '/api/push'
      preLoaderRoute: typeof ApiPushServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/auth/$': {
      id: '/api/auth/$'
      path: '/api/auth/$'
      fullPath: '/api/auth/$'
      preLoaderRoute: typeof ApiAuthSplatServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

interface LayoutWorkspaceIdRouteChildren {
  LayoutWorkspaceIdFeedbackIdRoute: typeof LayoutWorkspaceIdFeedbackIdRoute
  LayoutWorkspaceIdIndexRoute: typeof LayoutWorkspaceIdIndexRoute
}

const LayoutWorkspaceIdRouteChildren: LayoutWorkspaceIdRouteChildren = {
  LayoutWorkspaceIdFeedbackIdRoute: LayoutWorkspaceIdFeedbackIdRoute,
  LayoutWorkspaceIdIndexRoute: LayoutWorkspaceIdIndexRoute,
}

const LayoutWorkspaceIdRouteWithChildren =
  LayoutWorkspaceIdRoute._addFileChildren(LayoutWorkspaceIdRouteChildren)

interface LayoutRouteChildren {
  LayoutWorkspaceIdRoute: typeof LayoutWorkspaceIdRouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutWorkspaceIdRoute: LayoutWorkspaceIdRouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  ApiPushServerRoute: ApiPushServerRoute,
  ApiAuthSplatServerRoute: ApiAuthSplatServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()

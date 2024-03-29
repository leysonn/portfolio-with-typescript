/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ServicesImport } from './routes/services'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as PortfolioIndexImport } from './routes/portfolio/index'
import { Route as BlogIndexImport } from './routes/blog/index'
import { Route as PortfolioProjectIdImport } from './routes/portfolio/$projectId'
import { Route as BlogPostIdImport } from './routes/blog/$postId'

// Create/Update Routes

const ServicesRoute = ServicesImport.update({
  path: '/services',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioIndexRoute = PortfolioIndexImport.update({
  path: '/portfolio/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any)

const PortfolioProjectIdRoute = PortfolioProjectIdImport.update({
  path: '/portfolio/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const BlogPostIdRoute = BlogPostIdImport.update({
  path: '/blog/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/services': {
      preLoaderRoute: typeof ServicesImport
      parentRoute: typeof rootRoute
    }
    '/blog/$postId': {
      preLoaderRoute: typeof BlogPostIdImport
      parentRoute: typeof rootRoute
    }
    '/portfolio/$projectId': {
      preLoaderRoute: typeof PortfolioProjectIdImport
      parentRoute: typeof rootRoute
    }
    '/blog/': {
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof rootRoute
    }
    '/portfolio/': {
      preLoaderRoute: typeof PortfolioIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ServicesRoute,
  BlogPostIdRoute,
  PortfolioProjectIdRoute,
  BlogIndexRoute,
  PortfolioIndexRoute,
])

/* prettier-ignore-end */

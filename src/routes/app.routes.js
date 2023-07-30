import { lazy } from "react";

export const appRoutes = [
  {
    path: '/',
    component: lazy(() => import('../views/Home/Home')),
    title: null,
    linkTitle: "Home"
  },
  {
    path: '/blog',
    component: lazy(() => import('../views/Blog/Blog')),
    title: 'Blog',
    linkTitle: "Blog"
  },
];
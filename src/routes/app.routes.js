import { lazy } from "react";
import { BlogSkeleton } from "../components/ui/SkeletonLoaders/BlogSkeleton";

export const appRoutes = [
  {
    path: '/',
    component: lazy(() => import('../views/Home/Home')),
    skeleton: null,
    title: null,
    linkTitle: "Home"
  },
  {
    path: '/blog',
    component: lazy(() => import('../views/Blog/Blog')),
    skeleton: <BlogSkeleton />,
    title: 'Blog',
    linkTitle: "Blog"
  },
];
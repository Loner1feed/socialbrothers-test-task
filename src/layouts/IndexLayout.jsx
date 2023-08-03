import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/ui/Header/Header'
import { Footer } from '../components/ui/Footer/Footer'
import { BlogSkeleton } from '../components/ui/SkeletonLoaders/BlogSkeleton'
import { HomeSkeleton } from '../components/ui/SkeletonLoaders/HomeSkeleton'

export const IndexLayout = () => {
  const { pathname } = useLocation();
  const renderFallback = () => {
    if (pathname === "/blog") return <BlogSkeleton />
    else if (pathname === "/") return <HomeSkeleton />
    else return <div style={{ height: "100vh" }}></div>
  }

  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

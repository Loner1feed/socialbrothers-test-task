import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/ui/Header/Header'
import { Footer } from '../components/ui/Footer/Footer'

export const IndexLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

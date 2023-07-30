import React from 'react';
import { appRoutes } from '../../../routes/app.routes';
import { Route, Routes } from 'react-router-dom';
import { IndexLayout } from '../../../layouts/IndexLayout';

export const Router = () => {

  const renderAppRoutes = () => appRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ))

  return (
    <Routes>
      <Route element={<IndexLayout />}>
        {renderAppRoutes()}
      </Route>
    </Routes>
  )
}

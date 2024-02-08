import React, {
  lazy,
  Suspense,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout.tsx';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const TestPage = lazy(() => import('../pages/TestPage/TestPage'));

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            (
              <Suspense fallback={<div>...loading</div>}>
                <MainPage />
              </Suspense>
            )
          }
        />
				<Route
          path="test"
          element={
            (
              <Suspense fallback={<div>...loading</div>}>
                <TestPage />
              </Suspense>
            )
          }
        />
      </Route>
    </Routes>
  )
}

export default MainRoutes;

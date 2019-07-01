import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
// layouts
import Layout from './layouts/main'

// components

const Home = lazy(() => import('./modules/home'))

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<>Loading...</>}>
        <Router>
          <Home path="/" />
        </Router>
      </Suspense>
    </Layout>
  );
}

export default App;

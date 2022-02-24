import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

// components
import Loading from '../components/loading';
import Layout from '../layouts';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map(
              ({ isPrivate, ...props }, index) =>
                !isPrivate && <Route key={index} {...props} />
            )}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

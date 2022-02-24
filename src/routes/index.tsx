import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

// components
import Loading from '../components/loading';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(
            ({ isPrivate, ...props }, index) =>
              !isPrivate && <Route key={index} {...props} />
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;

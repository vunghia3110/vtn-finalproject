import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';
import EnhancedTable from './modules/users/components/UsersTable';
import LinearLoading from './modules/layout/components/LinearLoading'

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'));
const UsersPage = lazy(() => import('./modules/users/pages/UsersPage'));
const ProductsPage = lazy(() => import('./modules/products/pages/ProductsPage'));

interface Props {}

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<LinearLoading />}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />
        <Route path={ROUTES.users} component={UsersPage} />
        <Route path={ROUTES.products} component={ProductsPage} />

        {/* <Route path="/" component={LoginPage} /> */}
        <ProtectedRoute path="/" component={LoginPage} />
      </Switch>
    </Suspense>
  );
};

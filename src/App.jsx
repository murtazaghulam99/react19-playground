import React, { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalLoading from './components/GlobalLoading';

const MainLayout = React.lazy(() => import('./layouts/MainLayout'));
const HomePage = React.lazy(() => import('./components/HomePage'));
const UseExample1 = React.lazy(() => import('./components/useExample1/Joke').then(module => ({ default: module.UseExample1 })));
const UseExample2 = React.lazy(() => import('./components/useExample2/Posts').then(module => ({ default: module.UseExample2 })));
const UseExample3 = React.lazy(() => import('./components/useExample3/Message').then(module => ({ default: module.UseExample3 })));
const UseExampleContext = React.lazy(() => import('./components/useExampleContext/Theme').then(module => ({ default: module.UseExampleContext })));
const ActionExample1 = React.lazy(() => import('./components/actionExample1/Posts').then(module => ({ default: module.ActionExample1 })));
const ActionExample2 = React.lazy(() => import('./components/actionExample2/ShoppingCart').then(module => ({ default: module.ActionExample2 })));
const UseFormStatusExample = React.lazy(() => import('./components/useFormStatusExample/Posts').then(module => ({ default: module.UseFormStatusExample })));
const AddToCartForm = React.lazy(() => import('./components/useFormStateExample/AddToCartForm'));
const UseOptimisticExample = React.lazy(() => import('./components/useOptimisticExample/Message').then(module => ({ default: module.UseOptimisticExample })));
const UseTransitionExample = React.lazy(() => import('./components/useTransitionExample/Tabs').then(module => ({ default: module.UseTransitionExample })));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/' 
        element={
          <ErrorBoundary>
            <Suspense fallback={<GlobalLoading />}>
              <MainLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <Route 
          index 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <HomePage />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='use-example-1' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseExample1 />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='use-example-2' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseExample2 />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='use-example-3' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseExample3 />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='use-example-context' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseExampleContext />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='action-example-1' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <ActionExample1 />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='action-example-2' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <ActionExample2 />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='useformstatus-example' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseFormStatusExample />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='useformstate-example' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <>
                  <AddToCartForm
                    itemID='1'
                    itemTitle='JavaScript: The Definitive Guide'
                  />
                  <AddToCartForm
                    itemID='2'
                    itemTitle='JavaScript: The Good Parts'
                  />
                </>
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='useoptimistic-example' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseOptimisticExample />
              </Suspense>
            </ErrorBoundary>
          } 
        />
        <Route 
          path='usetransition-example' 
          element={
            <ErrorBoundary>
              <Suspense fallback={<GlobalLoading />}>
                <UseTransitionExample />
              </Suspense>
            </ErrorBoundary>
          } 
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

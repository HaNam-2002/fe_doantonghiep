import { Routes, Route } from 'react-router-dom';
import { router } from './routes/index';
import { Layout } from './layouts/index';
import { Fragment, useState } from 'react';
import { NotFound } from './pages/index';
import Protect from './pages/Protect/Protect.jsx';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    // <QueryClientProvider client={QueryClient}>
    <Routes>
      {router.normal.map((route, index) => {
        const Page = route.component;
        let LayoutDynamic = Layout;
        if (route.layout) LayoutDynamic = route.layout;
        else if (route.layout === null) LayoutDynamic = Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <LayoutDynamic>
                <Page />
              </LayoutDynamic>
            }
          />
        );
      })}
      {router.protect.map(route => {
        const Page = route.component;
        let LayoutDynamic = Layout;
        if (route.layout) LayoutDynamic = route.layout;
        else if (route.layout === null) LayoutDynamic = Fragment;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Protect setAuth={setAuth}>
                {auth && (
                  <LayoutDynamic>
                    <Page />
                  </LayoutDynamic>
                )}
              </Protect>
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;

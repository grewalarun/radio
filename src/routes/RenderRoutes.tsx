import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { routes } from './routeConfig';

const RenderRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = routes.find(
      route => route.path === location.pathname
    );
    if (currentRoute?.title) {
      document.title = currentRoute.title;
    }
  }, [location.pathname]);



  
  return (
    <Routes>
      {routes.map(({ path, element: Element, children }) => (
        <>
          {children ? (
            children.map(childRoute => {
              const ChildElement = childRoute.element;
              return ChildElement ? (
                <Route key={childRoute.path} path={childRoute.path} element={<ChildElement />} />
              ) : null;
            })
          ) : Element ? (
            <Route key={path} path={path} element={<Element />}/>
          ) : null}
        </>
      ))}
    </Routes>
  );
};

export default RenderRoutes;

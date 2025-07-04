import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            { element }
                        </div>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;

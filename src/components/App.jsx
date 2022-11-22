import { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
//import Navigation from './Navigation/Navigation';
import Container from './Container/Container';
import Loader from './Loader/Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "Home-page" */),
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviePage' /* webpackChunkName: "Movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '' /* webpackChunkName: "Movie-details-page" */
  ),
);

function App() {

  return (
    <Container>
    <AppBar />

    <Suspense fallback={<Loader />}>
     
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
            <MoviesPage />
          </Route>

    </Suspense>
  </Container>
  );
};

export default App;
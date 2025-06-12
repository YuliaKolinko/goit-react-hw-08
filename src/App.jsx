import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <>
      <Layout>
        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={RegistrationPage}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={ContactPage} />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

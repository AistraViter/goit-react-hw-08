import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import "normalize.css";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App({errorMessage }) {
  return (
    <div>
      {<Navigation />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage errorMessage={errorMessage} />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

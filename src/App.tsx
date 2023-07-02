import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const Loader = lazy(() => import("./pages/Loader"));
const Landing = lazy(() => import("./pages/Landing"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

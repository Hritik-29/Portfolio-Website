import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense fallback={<div style={{ backgroundColor: '#040b14', height: '100vh' }}></div>}>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;

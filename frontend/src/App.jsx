import { useEffect } from "react";
import { headingContext } from "./context";
import LandingPage from "./pages/LandingPage";
import Cms from "./pages/Cms";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const { heading, getHeading } = headingContext();
  useEffect(() => {
    getHeading();
  }, [heading, getHeading]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/settings" element={<Cms />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

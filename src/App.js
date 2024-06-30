import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./common/global.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { FullScreenLoader as Loader } from "./components/fullscreen_loader";
import { CustomCursor } from "./components/custom_cursor";
import { SmoothScrollBarWrapper } from "./common/smooth_scroll_bar";

const Home = React.lazy(() => import("./pages/home"));
const Story = React.lazy(() => import("./pages/story"));
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const Connect = React.lazy(() => import("./pages/connect"));

function App() {
  const location = useLocation();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [location]);

  return (
    <SmoothScrollBarWrapper>
      <CustomCursor />
      {isLoader && <Loader />}
      {!isLoader && <Header />}
      {!isLoader && <div id="header-height-space" />}
      {!isLoader && (
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/story"
            element={
              <React.Suspense fallback={<Loader />}>
                <Story />
              </React.Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <React.Suspense fallback={<Loader />}>
                <Portfolio />
              </React.Suspense>
            }
          />
          <Route
            path="/connect"
            element={
              <React.Suspense fallback={<Loader />}>
                <Connect />
              </React.Suspense>
            }
          />
        </Routes>
      )}
      {!isLoader && <Footer />}
    </SmoothScrollBarWrapper>
  );

  // return <FramerMotion />;
}

export default App;

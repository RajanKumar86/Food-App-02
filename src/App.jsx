import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<ContactUS />} />
            <Route path="*" element={<Error />} />
            <Route path="/restaurents/:resId" element={<RestaurentMenu />} />
            
            <Route
              path="/grocery"
              element={
                <Suspense fallback={<h1>Please wait a moment...</h1>}>
                  <Grocery />
                </Suspense>
              }
            />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

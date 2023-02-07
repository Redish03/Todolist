// react
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import BaseLayout from "./components/layouts/BaseLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;

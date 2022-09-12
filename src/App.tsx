import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./client/layout/layout";
import HomePage from "./client/pages/homePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hometab1 from "./client/components/homeTab1";
import Hometab2 from "./client/components/homeTab2";
import MovieDetail from "./client/pages/detail";
import Signin from "./client/pages/signin";
import Signup from "./client/pages/signup";
import Choose from "./client/pages/choose";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<HomePage />}>
            <Route index element={<Hometab1 />} />
            <Route path="tab1" element={<Hometab1 />} />
            <Route path="tab2" element={<Hometab2 />} />
            <Route path="choose" element={<Choose></Choose>}></Route>
          </Route>
          <Route path="detail" element={<MovieDetail />} />
        </Route>
        <Route path="signin" element={<Signin></Signin>} />
        <Route path="signup" element={<Signup></Signup>} />
      </Routes>
    </div>
  );
}

export default App;

import { observer } from "mobx-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./components/containers/PageContainer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Basket from "./components/pages/Card";
import { useEffect } from "react";
import Detail from "./pages/Detail";

function App() {
  const drawer = useSelector((state) => state.drawer);
  useEffect(() => {
    console.log(drawer);
  });

  console.log(drawer, "drawer");
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          {drawer === true && <Basket />}
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default observer(App);

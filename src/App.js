import { observer } from "mobx-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./components/containers/PageContainer";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import Basket from "./components/pages/Basket";
import { useEffect } from "react";

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
          </Routes>
          {drawer === true && <Basket />}
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default observer(App);

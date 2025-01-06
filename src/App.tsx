import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;

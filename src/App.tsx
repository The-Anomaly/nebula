import { MyHelmet } from "helmet";
import * as React from "react";
import { MainRouter } from "./router";

function App() {
  return (
    <>
    <MyHelmet />
      <MainRouter />
    </>
  );
}

export default App;

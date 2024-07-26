import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="flex justify-center items-start h-screen w-screen">
      <div className="min-w-[320px] max-w-[480px] w-screen h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

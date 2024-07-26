import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="min-w-[320px] max-w-[480px]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="flex justify-center items-center h-screen max-w-[480px] bg-pink-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

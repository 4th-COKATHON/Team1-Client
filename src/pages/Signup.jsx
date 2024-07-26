import React, { useState, useEffect } from "react";
import Splash from "../components/Splash";
import logo from "../assets/DirectHit.png";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <div className="bg-black h-screen">
      <img src={logo} alt="Direct" />
    </div>
  );
};

export default Signup;

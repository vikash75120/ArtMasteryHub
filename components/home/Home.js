"use client";

import { useRouter } from "next/navigation";

//daily-sketch-practice

const Home = () => {
  
  const router = useRouter();

  const handleClick = () => {
    router.push("/quick-draw");
  };
  
  const handleContactusClick = () => {
    router.push("/contactUs");
  };
  
  const handleAboutusClick = () => {
    router.push("./aboutus");
  };
  const handleLoginClick = () => {
    router.push("./login");
  };
  const handleResetClick = () => {
    router.push("./password-reset");
  };
  return (
    <main>
      <h1 className="font-bold text-black">home page</h1>
      <div className="flex flex-col">
      <button onClick={handleClick}>click me</button>
      <br/>
      <button onClick={handleContactusClick}>ContactUs</button>
      <button onClick={handleAboutusClick}>About Us</button>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleResetClick}>Reset-Password</button>
      </div>
    </main>
  );
};
export default Home;

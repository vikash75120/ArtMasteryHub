"use client";

import { useRouter } from "next/navigation";

//daily-sketch-practice

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quick-draw");
  };
  const handleAboutusClick = () => {
    router.push("./aboutus");
  };
  return (
    <main>
      <h1 className="font-bold text-black">home page</h1>
      <div className="flex flex-col">
      <button onClick={handleClick}>click me</button>
      <button onClick={handleAboutusClick}>About Us</button>
      </div>
    </main>
  );
};
export default Home;

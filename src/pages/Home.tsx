import React from "react";
import TrendButton from "../components/TrendButton";

const Home = () => {
  return (
    <section>
      <div className="px-5">
        <div className="bg-[#000000] text-white rounded-md">
          <div className="flex flex-col items-center justify-center">
            <h1>Discover Tech Stack, Endless UI Possibilites</h1>
            <p>Explore different UI categories with different tech stack and elevate your project.</p>
            <div className=" flex justify-between py-2 border w-full items-center">
              <p>Which UI do you need</p>
              <button>Search</button>
            </div>
            <div className="w-full items-center">
              <h4>Trending</h4>
              <div className="grid grid-cols-2">
                <TrendButton title="admin"/>
                <TrendButton title="ecommerce"/>
                <TrendButton title="mobile app"/>
                <TrendButton title="landing page"/>
                <TrendButton title="dashboard"/>
                <TrendButton title="portfolio"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

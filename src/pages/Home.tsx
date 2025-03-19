import React from "react";
import TrendButton from "../components/TrendButton";

const Home = () => {
  return (
    <section>
      <div className="px-5">
        <div className="bg-[#000000] text-white rounded-xl py-28 px-4 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-y-8 max-w-3xl border">
            <h1 className="text-2xl text-center font-semibold">Discover Tech Stack, Endless UI Possibilites</h1>
            <p className="text-center text-[14px] px-4 text-white/30">Explore different UI categories with different tech stack and elevate your project.</p>
            <div className=" flex justify-between py-4 rounded-full bg-white bg-opacity-20 px-5 w-full items-center">
              <p className="text-[14px] text-opacity-45 text-white">Which UI do you need</p>
              <button className="text-sm">Search</button>
            </div>
            <div className="w-full items-center">
              <h4 className="text-center mb-5 text-white text-opacity-40 text-sm">Trending</h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                <TrendButton title="admin"/>
                <TrendButton title="e-commerce"/>
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

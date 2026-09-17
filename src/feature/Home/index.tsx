"use client";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import CharactersSection from "./components/Characters";

export default function Home() {
  return (
    <main className="bg-gray-200 text-slate-800 overflow-x-hidden">
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Featured Menu Grid */}
      <Menu />

      <CharactersSection />

      {/* 4. Banner Section */}
      <Banner />
    </main>
  );
}

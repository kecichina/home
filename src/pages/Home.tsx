import React from 'react';
import Navbar from '@/components/Navbar';
import TagRabbitAIChat from '@/components/TagRabbitAIChat';
import Banner from '@/components/Banner';
import AboutSection from '@/components/AboutSection';
import AdvantageSection from '@/components/AdvantageSection';
import ProductSection from '@/components/ProductSection';
import NewsSection from '@/components/NewsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
  <main className="flex-grow">
    <Banner />
    <div className="container mx-auto px-4 py-8">
      <AboutSection />
      <AdvantageSection className="mt-16" />
      <ProductSection className="mt-16" />
      <NewsSection className="mt-16" />
      <TeamSection className="mt-16" />
    </div>
  </main>
       <TagRabbitAIChat />
       <Footer />
    </div>
  );
}
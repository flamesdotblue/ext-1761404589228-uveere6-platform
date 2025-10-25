import React from 'react';
import Hero from './components/Hero';
import SlideDeck from './components/SlideDeck';
import StatsAndGraphs from './components/StatsAndGraphs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">When do I feel afraid of somebody and when do I feel assured? Why?</h2>
          <p className="text-neutral-300 leading-relaxed max-w-3xl">
            This is a creative, personal exploration turned into a living presentation. It blends feelings, examples, small experiments, and a splash of art to make reflection memorable. Navigate through the slides, notice patterns, and see how context, cues, and choices change the way I feel around people.
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <SlideDeck />
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <StatsAndGraphs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

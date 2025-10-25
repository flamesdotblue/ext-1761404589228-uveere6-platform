import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, Heart, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="text-sm text-white">Creative Reflection • Solo Project</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Between Fear and Assurance
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-200">
            Reading the room, reading the heart: how I sense safety, and why it changes.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm bg-pink-500/20 text-pink-100 border border-pink-400/30 rounded-full px-3 py-1">
              <Shield className="w-4 h-4" /> Boundaries
            </span>
            <span className="inline-flex items-center gap-2 text-sm bg-purple-500/20 text-purple-100 border border-purple-400/30 rounded-full px-3 py-1">
              <Heart className="w-4 h-4" /> Warmth
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

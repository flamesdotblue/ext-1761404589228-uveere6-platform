import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>Made as an individual creative reflection. Images from Unsplash. No external accounts stored.</p>
          <p className="opacity-80">Tip: Use full-screen browser for a smooth slide experience.</p>
        </div>
      </div>
    </footer>
  );
}

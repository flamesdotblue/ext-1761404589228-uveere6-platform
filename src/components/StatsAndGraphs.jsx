import React from 'react';

function BarChart() {
  const data = [68, 57, 42, 35];
  const labels = ['Body language', 'Tone of voice', 'Past behavior', 'Setting'];
  const colors = ['#ec4899', '#a78bfa', '#22d3ee', '#34d399'];
  const max = Math.max(...data);
  return (
    <div className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
      <h4 className="text-lg font-semibold mb-2">What influences my first impression?</h4>
      <p className="text-sm text-neutral-300 mb-4">Self-observation sample (n=25 quick notes across a month). Percent of times each cue dominated.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((v, i) => (
          <div key={i} className="flex flex-col">
            <div className="h-40 w-full bg-white/5 rounded-lg overflow-hidden flex items-end">
              <div
                className="w-full rounded-t-lg"
                style={{ height: `${(v / max) * 100}%`, background: colors[i] }}
              />
            </div>
            <span className="mt-2 text-sm text-neutral-300">{labels[i]}</span>
            <span className="text-sm font-medium">{v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart() {
  const points = [70, 55, 60, 50, 65, 75, 80]; // assurance score over 7 days
  const max = 100;
  const width = 560;
  const height = 180;
  const step = width / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - (p / max) * height}`)
    .join(' ');

  return (
    <div className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
      <h4 className="text-lg font-semibold mb-2">Assurance score across a week</h4>
      <p className="text-sm text-neutral-300 mb-4">Higher means I felt safer with interactions that day.</p>
      <div className="overflow-x-auto">
        <svg width={width} height={height} className="rounded-lg bg-white/5">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path d={path} fill="none" stroke="url(#grad)" strokeWidth="3" />
          {points.map((p, i) => (
            <circle key={i} cx={i * step} cy={height - (p / max) * height} r="4" fill="#fff" />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function StatsAndGraphs() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Data, Patterns, and Visuals</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart />
        <div className="space-y-6">
          <LineChart />
          <div className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
            <h4 className="text-lg font-semibold mb-2">Quick Takeaways</h4>
            <ul className="list-disc pl-5 text-neutral-200 space-y-1">
              <li>Clear, calm tone raises assurance quickly.</li>
              <li>Boundary testing early on correlates with fear spikes.</li>
              <li>Consistent follow-through keeps trust durable over time.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img className="rounded-xl border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" alt="calm sea" />
        <img className="rounded-xl border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop" alt="city lights" />
        <img className="rounded-xl border border-white/10 object-cover h-48 w-full" src="https://images.unsplash.com/photo-1665110770719-4d2749f1601f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbGlkZSUyMDUlMjAlRTIlODAlQTIlMjBSZWR8ZW58MHwwfHx8MTc2MTQwNDcxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="contrast shadows" />
      </div>
    </div>
  );
}

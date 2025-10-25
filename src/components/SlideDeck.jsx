import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slide = ({ title, content, image, accent = 'from-pink-500/20 to-purple-500/20', footer }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-5 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 shadow-xl">
      <div className="order-2 lg:order-1 flex flex-col">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <div className="text-neutral-200 leading-relaxed space-y-3" dangerouslySetInnerHTML={{ __html: content }} />
        {footer && <div className="mt-4 text-sm text-neutral-400">{footer}</div>}
      </div>
      <div className="order-1 lg:order-2 relative overflow-hidden rounded-xl border border-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} pointer-events-none`} />
        <img src={image} alt="slide visual" className="w-full h-72 md:h-full object-cover" />
      </div>
    </div>
  );
};

export default function SlideDeck() {
  const slides = useMemo(() => [
    {
      title: 'Slide 1 • My Working Definition',
      content:
        `<p><strong>Afraid</strong> is when my body prepares for threat: tight shoulders, quick scans, shallow breath. <strong>Assured</strong> is ease: slower breath, steady eye contact, soft focus.</p>
         <p>Both are signals, not verdicts. I listen, then test.</p>`,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-pink-500/20 to-purple-500/20',
    },
    {
      title: 'Slide 2 • First Cues I Notice',
      content:
        `<ul class="list-disc pl-5 space-y-1">
          <li>Voice: volume and speed</li>
          <li>Body: invasion of space vs. respectful distance</li>
          <li>Eyes: darting, cold, or kind</li>
          <li>Hands: tense fists vs. open palms</li>
        </ul>`,
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Slide 3 • Rap: The Gut Check',
      content:
        `<p>Heart says “hush,” feet say “stay,”<br/> eyes map exits, mind says “weigh.”<br/> If respect is shown, I’ll give it back—<br/> If not, I pivot, change my track.</p>`,
      image:
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-fuchsia-500/20 to-rose-500/20',
    },
    {
      title: 'Slide 4 • Personal Snapshot: The Crowd',
      content:
        `<p>In loud crowds, I feel uneasy when someone pushes through without “excuse me.”
        I feel assured when strangers create a little space, offer a nod, or lift a hand to signal movement.</p>`,
      image:
        'https://images.unsplash.com/photo-1514512364185-4c2b026b3a19?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-pink-500/20 to-violet-500/20',
    },
    {
      title: 'Slide 5 • Red Flags That Raise Fear',
      content:
        `<ul class="list-disc pl-5 space-y-1">
          <li>Belittling or mocking others</li>
          <li>Ignoring clear boundaries</li>
          <li>Sudden mood flips used to control</li>
          <li>Secrecy about basic intentions</li>
        </ul>`,
      image:
        'https://images.unsplash.com/photo-1665110770719-4d2749f1601f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbGlkZSUyMDUlMjAlRTIlODAlQTIlMjBSZWR8ZW58MHwwfHx8MTc2MTQwNDcxOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      accent: 'from-rose-500/20 to-purple-600/20',
    },
    {
      title: 'Slide 6 • Green Lights That Assure Me',
      content:
        `<ul class="list-disc pl-5 space-y-1">
          <li>Clear “no” and respectful “yes”</li>
          <li>Accountability: “I was wrong”</li>
          <li>Steady tone, consistent follow-through</li>
          <li>Curiosity over judgment</li>
        </ul>`,
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      title: 'Slide 7 • Mini Experiment: The 3-Beat Rule',
      content:
        `<p>I pause for three breaths when I feel tension. If the person mirrors calm, assurance rises. If they push harder, fear signals me to step back.</p>`,
      image:
        'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-purple-500/20 to-blue-500/20',
    },
    {
      title: 'Slide 8 • Poem: Handrails',
      content:
        `<p>Kind words are handrails<br/> on stairways I can’t see.<br/> I trust the touch that holds,<br/> not hands that hurry me.</p>`,
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-pink-500/20 to-indigo-500/20',
    },
    {
      title: 'Slide 9 • Context Matters',
      content:
        `<p>Authority with empathy feels safe; power without transparency feels risky.
        Familiar places lower alertness; unfamiliar settings make cues louder.</p>`,
      image:
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      title: 'Slide 10 • Micro-Data From My Week',
      content:
        `<p>Across 7 interactions, I felt assured 5 times, uneasy twice. The two uneasy moments involved rushed conversations and ignored boundaries.</p>`,
      image:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-amber-500/20 to-pink-500/20',
    },
    {
      title: 'Slide 11 • What I Do When I Feel Afraid',
      content:
        `<ul class="list-disc pl-5 space-y-1">
          <li>Check my body: inhale 4, hold 2, exhale 6</li>
          <li>Ask a clarifying question</li>
          <li>Create distance or end the chat</li>
          <li>Follow up later if needed, in writing</li>
        </ul>`,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-red-500/20 to-slate-500/20',
    },
    {
      title: 'Slide 12 • What I Do When I Feel Assured',
      content:
        `<ul class="list-disc pl-5 space-y-1">
          <li>Share more context and listen more</li>
          <li>Collaborate and try small risks</li>
          <li>Offer appreciation specifically</li>
          <li>Build rhythms: regular check-ins</li>
        </ul>`,
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-green-500/20 to-cyan-500/20',
    },
    {
      title: 'Slide 13 • My Short Checklist',
      content:
        `<p>Before committing time or trust, I ask:<br/>
        1) Do they hear “no”?<br/>
        2) Do they stay kind when stressed?<br/>
        3) Do words and actions match?<br/>
        4) Do I feel more me around them?</p>`,
      image:
        'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
      accent: 'from-sky-500/20 to-purple-500/20',
    },
  ], []);

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Interactive Slides ({index + 1}/{slides.length})</h3>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Next" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Slide {...slides[index]} />
      <div className="mt-4 grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition ${i === index ? 'bg-pink-400' : 'bg-white/20 hover:bg-white/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

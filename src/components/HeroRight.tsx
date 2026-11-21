import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Leaf } from 'lucide-react';
const VIDEO_URL = 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_green_energy.mp4';
export default function HeroRight() {
  const [videoError,setVideoError] = useState(false);
  const reduced = useReducedMotion();
  return <motion.div initial={reduced?false:{opacity:0,x:30,scale:.98}} animate={{opacity:1,x:0,scale:1}} transition={{duration:.8,delay:.25,ease:'easeOut'}} className="relative isolate h-[380px] w-full sm:h-[480px] md:h-[540px] lg:h-[600px]">
    <div aria-hidden="true" className="pointer-events-none absolute -inset-10 -z-10 animate-pulse rounded-full bg-emerald-100/20 blur-[75px]"/><div aria-hidden="true" className="pointer-events-none absolute -right-16 -bottom-16 -z-20 size-72 rounded-full bg-blue-50/20 blur-[90px]"/>
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-50 via-white to-sky-50 sm:rounded-[36px]">
      {!videoError ? <video aria-label="Green energy landscape cinematic video" className="h-full w-full object-cover mix-blend-multiply contrast-[1.06] brightness-[1.03]" src={VIDEO_URL} autoPlay={!reduced} muted playsInline loop preload="metadata" onError={()=>setVideoError(true)} /> : <div role="img" aria-label="Green energy illustration fallback" className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-emerald-50 via-teal-100 to-sky-100 text-emerald-dark"><Leaf size={90} strokeWidth={1}/><span className="font-display text-2xl font-bold">A greener tomorrow</span></div>}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-emerald-900/5"/>
    </div>
    <motion.div initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.9,duration:.6}} className="absolute right-4 bottom-5 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-emerald-900/10 backdrop-blur-xl sm:right-[-12px] sm:bottom-10"><span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-base"><Leaf size={21}/></span><div><p className="font-display text-sm font-bold text-slate-900">100% Forward Thinking</p><p className="mt-0.5 text-[11px] text-slate-500">Energy with purpose</p></div></motion.div>
  </motion.div>;
}
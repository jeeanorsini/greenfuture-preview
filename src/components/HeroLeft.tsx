import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Globe2, Leaf, Zap } from 'lucide-react';
const features = [
  { icon: Zap, title: 'Clean Energy', description: 'Reliable. Renewable. Responsible.' },
  { icon: Leaf, title: 'Sustainable Future', description: 'Building a cleaner planet for everyone.' },
  { icon: Globe2, title: 'Global Impact', description: 'Solutions that create change worldwide.' },
];
export default function HeroLeft() {
  const reduced = useReducedMotion();
  const reveal = (delay:number) => ({initial:reduced?false:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:reduced?0:delay}});
  return <div className="flex flex-col justify-center py-7 lg:py-12">
    <motion.div {...reveal(.1)}><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-4 py-2 text-[11px] font-bold tracking-[.14em] text-emerald-dark uppercase"><span className="size-2 rounded-full bg-emerald-base"/>The future is renewable</div><h1 className="max-w-[650px] font-display text-[30px] leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-[42px] md:text-[52px] lg:text-[54px]">Powering today.<br/><span className="text-emerald-base">Protecting tomorrow.</span></h1></motion.div>
    <motion.p {...reveal(.2)} className="mt-7 max-w-[510px] text-base leading-relaxed text-slate-500 md:text-[17px]">We deliver innovative green energy solutions that drive progress, protect our planet, and create a sustainable future for generations to come.</motion.p>
    <motion.div {...reveal(.3)} className="mt-9 flex flex-wrap items-center gap-3"><a href="#solutions" className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-dark px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition-all hover:-translate-y-0.5 hover:bg-emerald-darker hover:shadow-xl">Explore Solutions <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></a><a href="#impact" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#009e52]/45 bg-white px-6 py-4 text-sm font-semibold text-emerald-dark transition-all hover:-translate-y-0.5 hover:border-emerald-base hover:bg-emerald-50"><Leaf size={17} className="transition-transform group-hover:scale-110"/>Our Impact</a></motion.div>
    <motion.div {...reveal(.4)} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 lg:mt-24 lg:gap-3">{features.map((feature,index)=><div key={feature.title} className={`group relative flex flex-col items-start gap-3 ${index>0?'sm:pl-4 lg:pl-5':''}`}>
      {index>0&&<span aria-hidden="true" className="absolute top-0 bottom-0 left-0 hidden w-px bg-slate-100 sm:block"/>}<span className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-base transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100"><feature.icon size={21} strokeWidth={1.9}/></span><div><h2 className="font-display text-[16px] leading-tight font-bold text-slate-900">{feature.title}</h2><p className="mt-2 max-w-[160px] text-[13px] leading-relaxed text-slate-400">{feature.description}</p></div>
    </div>)}</motion.div>
  </div>;
}
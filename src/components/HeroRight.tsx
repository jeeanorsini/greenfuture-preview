import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Leaf, Wind } from 'lucide-react';

const VIDEO_URL = 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_green_energy.mp4';

export default function HeroRight() {
  const [videoError,setVideoError] = useState(false);
  const reduced = false;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target:containerRef,offset:['start end','end start']});
  const videoY = useTransform(scrollYProgress,[0,1],['-7%','7%']);
  const glowX = useTransform(scrollYProgress,[0,1],[-65,65]);
  useEffect(()=>{
    const v=videoRef.current;
    if(v && !reduced) {v.play().catch(()=>{/* Mobile browser may block media playback */});}
  },[reduced]);

  return <div ref={containerRef} className="relative isolate h-[400px] w-full sm:h-[500px] md:h-[540px] lg:h-[620px]">
    <motion.div aria-hidden="true" style={reduced?undefined:{x:glowX}} className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-emerald-200/35 blur-[75px]"/>
    <motion.div aria-hidden="true" animate={reduced?{}:{x:[0,-30,0],y:[0,22,0]}} transition={{duration:10,repeat:Infinity,ease:'easeInOut'}} className="pointer-events-none absolute -right-16 -bottom-16 -z-20 size-72 rounded-full bg-sky-200/55 blur-[90px]"/>
    <motion.div initial={reduced?false:{opacity:0,scale:.86,rotate:3}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.15,delay:.2,ease:[.22,1,.36,1]}} className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-[#c2f4d8] via-[#e7faf0] to-[#dcefff] sm:rounded-[42px]">
      <motion.div className="absolute -inset-[9%]" style={reduced?undefined:{y:videoY}}>
        {!videoError ? <video ref={videoRef} aria-label="Green energy landscape cinematic video" className="h-full w-full object-cover mix-blend-multiply contrast-[1.09] brightness-[1.03]" src={VIDEO_URL} autoPlay muted playsInline loop preload="auto" onError={()=>setVideoError(true)} /> : <div role="img" aria-label="Green energy illustration fallback" className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 text-emerald-dark"><motion.div animate={reduced?{}:{rotate:360}} transition={{duration:30,repeat:Infinity,ease:'linear'}} className="absolute size-72 rounded-full border border-dashed border-emerald-500/35"/><motion.div animate={reduced?{}:{rotate:-360}} transition={{duration:22,repeat:Infinity,ease:'linear'}} className="absolute size-52 rounded-full border border-emerald-600/30"/><motion.div animate={reduced?{}:{y:[-12,12,-12],rotate:[-4,4,-4]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}><Wind size={112} strokeWidth={.9}/></motion.div><span className="font-display text-xl font-bold">Energy in motion</span></div>}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-white/15"/>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-emerald-900/10"/>
      <motion.div aria-hidden="true" animate={reduced?{}:{opacity:[.14,.5,.14],scale:[.95,1.1,.95]}} transition={{duration:4.8,repeat:Infinity}} className="pointer-events-none absolute -right-16 top-12 size-60 rounded-full border border-white/60 bg-white/15 blur-md"/>
    </motion.div>
    <motion.div initial={reduced?false:{opacity:0,y:50,rotate:-3}} animate={{opacity:1,y:0,rotate:0}} transition={{delay:1.05,duration:.9,ease:[.22,1,.36,1]}} whileHover={reduced?{}:{y:-8,rotate:-1}} className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-white/75 bg-white/95 px-5 py-4 shadow-[0_25px_60px_-22px_rgba(0,100,65,.4)] backdrop-blur-xl sm:-right-5 sm:bottom-10">
      <motion.span animate={reduced?{}:{rotate:[-8,8,-8]}} transition={{duration:4.5,repeat:Infinity,ease:'easeInOut'}} className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-base"><Leaf size={22}/></motion.span>
      <div><p className="font-display text-sm font-bold text-slate-900">100% Forward Thinking</p><p className="mt-1 text-[11px] text-slate-500">Energy with purpose</p></div><ArrowUpRight size={16} className="text-emerald-base"/>
    </motion.div>
    <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:1.3,duration:.8}} className="absolute -left-2 top-8 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-dark shadow-lg backdrop-blur-xl sm:-left-6"><motion.span animate={reduced?{}:{scale:[1,1.5,1],opacity:[1,.5,1]}} transition={{duration:2.2,repeat:Infinity}} className="size-2 rounded-full bg-emerald-base"/>Live the change</motion.div>
  </div>;
}

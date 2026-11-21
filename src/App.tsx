import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Droplets, Leaf, Sun, Wind } from 'lucide-react';
import Header from './components/Header';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';

const technologies = [
  { number:'01', label:'THE POWER OF AIR', title:'Aerodynamic Wind Grid', description:'Harnessing powerful air currents with a next-generation distributed wind network.', Icon:Wind, color:'from-emerald-100 to-teal-50' },
  { number:'02', label:'THE FORCE OF WATER', title:'Gravitational Hydro', description:'Transforming the movement of water into dependable renewable energy.', Icon:Droplets, color:'from-cyan-100 to-sky-50' },
  { number:'03', label:'THE ENERGY OF LIGHT', title:'Unified Solar-Thermal', description:'Connecting sunlight and stored thermal energy into an intelligent power system.', Icon:Sun, color:'from-amber-100 to-yellow-50' }
];

function Reveal({children, delay=0, className=''}:{children:React.ReactNode;delay?:number;className?:string}) {
  const reduced=useReducedMotion();
  return <motion.div initial={reduced?false:{opacity:0,y:64,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:false,amount:.16,margin:'0px 0px -70px 0px'}} transition={{duration:.85,delay,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>;
}

export default function App() {
  const reduced=useReducedMotion();
  const heroRef=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:heroRef,offset:['start start','end start']});
  const heroTranslate=useTransform(scrollYProgress,[0,1],[0,-85]);
  const heroOpacity=useTransform(scrollYProgress,[0,.9],[1,.35]);
  const progressScale=useTransform(scrollYProgress,[0,1],[0,1]);
  return <div id="home" className="min-h-screen overflow-x-clip bg-white">
    <motion.div aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-emerald-base" style={{scaleX:progressScale}} />
    <Header/>
    <main>
      <section ref={heroRef} aria-label="GreenFuture introduction" className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 md:px-12 lg:min-h-[750px] lg:grid-cols-12 lg:gap-8 lg:pt-12">
        <motion.div style={reduced?undefined:{y:heroTranslate,opacity:heroOpacity}} className="relative z-10 lg:col-span-6"><HeroLeft/></motion.div>
        <div className="lg:col-span-6"><HeroRight/></div>
        <motion.a href="#solutions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.5}} className="group absolute bottom-3 left-6 hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[.25em] text-emerald-dark lg:flex md:left-12">Scroll to discover <motion.span animate={reduced?{}:{y:[0,8,0]}} transition={{repeat:Infinity,duration:2,ease:'easeInOut'}}><ArrowDownRight size={18}/></motion.span></motion.a>
      </section>

      <section aria-label="Energy vision" className="relative overflow-hidden bg-[#09251c] py-20 text-white md:py-28">
        <motion.div aria-hidden="true" animate={reduced?{}:{x:[-40,65,-40],y:[0,25,0],scale:[1,1.2,1]}} transition={{duration:13,repeat:Infinity,ease:'easeInOut'}} className="pointer-events-none absolute -left-24 top-0 h-[350px] w-[350px] rounded-full bg-emerald-400/20 blur-[90px]" />
        <motion.div aria-hidden="true" animate={reduced?{}:{x:[0,-100,0],y:[0,-35,0]}} transition={{duration:16,repeat:Infinity,ease:'easeInOut'}} className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[90px]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <Reveal><p className="mb-8 text-xs font-bold uppercase tracking-[.3em] text-emerald-300">A different kind of energy</p></Reveal>
          <Reveal delay={.12}><h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-[78px]">The future doesn't<br/>wait. <span className="text-emerald-400">Neither do we.</span></h2></Reveal>
          <Reveal delay={.22}><div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/20 pt-8 md:flex-row"><p className="max-w-md text-base leading-relaxed text-white/65">Clean energy isn't simply the next chapter. It's the way we power everything that comes next.</p><a href="#solutions" className="group inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/70 px-6 py-3 text-sm font-bold text-emerald-200 transition-colors hover:bg-emerald-500 hover:text-white">Explore our technology <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></a></div></Reveal>
        </div>
      </section>

      <section id="solutions" aria-labelledby="solutions-heading" className="relative overflow-hidden bg-[#f7faf8] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-base">Technology in motion</p><h2 id="solutions-heading" className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Nature is our<br/><span className="text-emerald-base">greatest engineer.</span></h2></div><p className="max-w-xs text-base leading-relaxed text-slate-500">Three renewable forces. One ambitious vision for the planet.</p></div></Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {technologies.map((technology,i)=><Reveal key={technology.number} delay={i*.14}><motion.article whileHover={reduced?{}:{y:-14,scale:1.015}} transition={{type:'spring',stiffness:210,damping:20}} className="group relative flex min-h-[410px] flex-col overflow-hidden rounded-[30px] border border-emerald-900/5 bg-white p-8 shadow-[0_20px_70px_-45px_rgba(0,70,45,.15)] sm:min-h-[460px]">
              <span className="text-sm font-semibold tracking-widest text-emerald-base">{technology.number} / 03</span>
              <div className={`relative my-8 flex h-40 items-center justify-center overflow-hidden rounded-[26px] bg-gradient-to-br ${technology.color}`}>
                <motion.div animate={reduced?{}:{rotate:360}} transition={{duration:24+i*5,repeat:Infinity,ease:'linear'}} className="absolute h-36 w-36 rounded-full border border-dashed border-emerald-600/25" />
                <motion.div animate={reduced?{}:{rotate:-360}} transition={{duration:19+i*4,repeat:Infinity,ease:'linear'}} className="absolute h-24 w-24 rounded-full border border-emerald-800/15" />
                <motion.div animate={reduced?{}:{y:[-7,7,-7]}} transition={{duration:3.8+i,repeat:Infinity,ease:'easeInOut'}}><technology.Icon size={68} strokeWidth={1.1} className="text-emerald-700"/></motion.div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-emerald-base">{technology.label}</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900">{technology.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{technology.description}</p>
              <div className="mt-auto flex justify-end pt-8"><ArrowUpRight className="text-emerald-base transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" size={22}/></div>
            </motion.article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="impact" aria-labelledby="impact-heading" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal><div className="relative flex aspect-square max-h-[520px] items-center justify-center overflow-hidden rounded-[36px] bg-[#0b3024]">
            <motion.div aria-hidden="true" animate={reduced?{}:{rotate:360}} transition={{duration:32,repeat:Infinity,ease:'linear'}} className="absolute h-[80%] w-[80%] rounded-full border border-emerald-300/25" />
            <motion.div aria-hidden="true" animate={reduced?{}:{rotate:-360}} transition={{duration:23,repeat:Infinity,ease:'linear'}} className="absolute h-[59%] w-[59%] rounded-full border border-dashed border-emerald-300/40" />
            <motion.div animate={reduced?{}:{scale:[1,1.12,1],rotate:[-5,5,-5]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}} className="flex h-[40%] w-[40%] items-center justify-center rounded-full bg-emerald-400/10 shadow-[0_0_100px_40px_rgba(16,185,129,.14)]"><Leaf className="h-[65%] w-[65%] text-emerald-300" strokeWidth={.8}/></motion.div>
            <span className="absolute bottom-8 left-8 text-xs font-bold uppercase tracking-[.22em] text-emerald-200">Built for the next generation</span>
          </div></Reveal>
          <div>
            <Reveal><p className="text-xs font-bold uppercase tracking-[.24em] text-emerald-base">The impact we envision</p></Reveal>
            <Reveal delay={.1}><h2 id="impact-heading" className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Real progress.<br/><span className="text-emerald-base">Lasting change.</span></h2></Reveal>
            <Reveal delay={.2}><p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-500">We believe reliable, renewable energy should support communities while protecting the planet for future generations.</p></Reveal>
            <Reveal delay={.3}><div className="mt-10 grid grid-cols-2 gap-5 border-t border-slate-200 pt-8"><div><span className="font-display text-4xl font-bold text-emerald-dark">24/7</span><p className="mt-2 text-sm text-slate-500">A vision for continuous clean energy</p></div><div><span className="font-display text-4xl font-bold text-emerald-dark">100%</span><p className="mt-2 text-sm text-slate-500">Commitment to a sustainable future</p></div></div></Reveal>
          </div>
        </div>
      </section>
      <footer id="resources" className="bg-[#09251c] px-6 py-10 text-center text-sm text-white/50">© {new Date().getFullYear()} GreenFuture. Powering a Better Tomorrow.</footer>
    </main>
  </div>;
}

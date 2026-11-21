import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronDown, Leaf, Menu, X } from 'lucide-react';

const menus = [
  { label: 'Solutions', items: ['Aerodynamic Wind Grid', 'Gravitational Hydro', 'Unified Solar-Thermal'] },
  { label: 'Technology', items: ['Bio-Floating Foundations', 'Synchronized AI Dispatch', 'Atmospheric Condensers'] },
  { label: 'Impact', href: '#impact' },
  { label: 'About Us', items: ['Our Visionaries', 'Environmental Counsel', 'Support & FAQs'] },
  { label: 'Resources', href: '#resources' },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  return <header className="relative z-30 mx-auto max-w-7xl px-6 md:px-12">
    <div className="flex min-h-24 items-center justify-between gap-4 border-b border-slate-100 py-4">
      <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="GreenFuture home">
        <motion.span animate={{scale:[1,1.065,1]}} transition={{duration:3.5,repeat:Infinity,ease:'easeInOut'}} className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-base"><Leaf size={23} strokeWidth={2.2}/></motion.span>
        <span className="flex flex-col"><strong className="font-display text-[21px] leading-tight font-bold tracking-tight text-slate-900">GreenFuture</strong><span className="font-display text-[10px] font-bold tracking-wider text-emerald-base uppercase">Powering a Better Tomorrow</span></span>
      </a>
      <nav aria-label="Main navigation" className="hidden items-center gap-3 md:flex lg:gap-6">
        {menus.map(menu => <div key={menu.label} className="relative" onMouseEnter={()=>setActive(menu.label)} onMouseLeave={()=>setActive(null)}>
          {menu.items ? <button type="button" onClick={()=>setActive(active===menu.label?null:menu.label)} aria-expanded={active===menu.label} className="flex items-center gap-1 py-3 text-[12px] font-medium text-slate-600 transition-colors hover:text-emerald-700 lg:text-[13px]">{menu.label}<ChevronDown size={13} className={`transition-transform ${active===menu.label?'rotate-180':''}`}/></button> : <a className="block py-3 text-[12px] font-medium text-slate-600 transition-colors hover:text-emerald-700 lg:text-[13px]" href={menu.href}>{menu.label}</a>}
          <AnimatePresence>{menu.items && active===menu.label && <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} transition={{duration:.18}} className="absolute top-full left-1/2 w-64 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-900/10">{menu.items.map((item,index)=><a key={item} href={`#${menu.label==='Solutions'?'solutions':'resources'}`} onClick={()=>setActive(null)} className="block rounded-lg px-4 py-3 text-xs font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-dark"><span className="mr-2 text-emerald-base">0{index+1}</span>{item}</a>)}</motion.div>}</AnimatePresence>
        </div>)}
      </nav>
      <div className="flex items-center gap-2"><a href="mailto:hello@greenfuture.example?subject=GreenFuture%20Inquiry" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-dark px-4 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-emerald-darker sm:px-5 lg:text-[13px]">Get in Touch<ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></a><button type="button" aria-label={mobileOpen?'Close menu':'Open menu'} aria-expanded={mobileOpen} onClick={()=>setMobileOpen(!mobileOpen)} className="rounded-lg p-2 text-slate-800 md:hidden">{mobileOpen?<X size={22}/>:<Menu size={22}/>}</button></div>
    </div>
    <AnimatePresence>{mobileOpen && <motion.nav aria-label="Mobile navigation" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="overflow-hidden border-b border-slate-100 bg-white md:hidden"><div className="space-y-1 py-3">{menus.map(menu=><div key={menu.label}>{menu.items?<details className="group"><summary className="cursor-pointer list-none rounded-lg px-3 py-3 text-sm font-semibold text-slate-700">{menu.label} <ChevronDown size={14} className="inline"/></summary><div className="pl-5">{menu.items.map(item=><a key={item} onClick={()=>setMobileOpen(false)} href="#solutions" className="block py-2 text-sm text-slate-600">{item}</a>)}</div></details>:<a href={menu.href} onClick={()=>setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700">{menu.label}</a>}</div>)}</div></motion.nav>}</AnimatePresence>
  </header>;
}
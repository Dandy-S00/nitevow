import { ArrowRight, EyeOff, LockKeyhole, MessagesSquare, ShieldAlert, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";

const principles = [
  { icon: EyeOff, title: "Discreet by default", copy: "Use a chosen display name. Share only city-level location, never a street address." },
  { icon: ShieldAlert, title: "Safety stays close", copy: "Discreet safety alerts and report actions are placed wherever connection happens." },
  { icon: MessagesSquare, title: "Private threads", copy: "Verified members can hold conversations in access-controlled message threads." },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080d1d] text-white">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_12%,rgba(209,170,89,.16),transparent_25rem),radial-gradient(circle_at_10%_85%,rgba(47,96,157,.26),transparent_28rem)]" />
          <div className="container relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e1c687]/25 bg-[#e1c687]/8 px-3 py-1.5 text-xs font-medium tracking-wide text-[#e1c687]"><ShieldCheck className="h-3.5 w-3.5" /> Adult-only. Safety-led. Discreet.</div>
              <p className="eyebrow">Connection, on your own terms</p>
              <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[.95] tracking-[-.045em] sm:text-6xl lg:text-8xl">Find the connection that feels <span className="text-[#e1c687]">considered.</span></h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">NiteVow brings thoughtful adult connections into a refined, moderated space. You decide how you appear, what you share, and when you engage.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button onClick={() => isAuthenticated ? setLocation("/post") : startLogin()} className="h-12 rounded-xl bg-[#e1c687] px-6 font-semibold text-[#10172c] hover:bg-[#f0da9f]">{isAuthenticated ? "Create a listing" : "Enter NiteVow"}<ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button onClick={() => setLocation("/browse")} variant="outline" className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-slate-100 hover:bg-white/10 hover:text-white">Explore listings</Button>
              </div>
              <p className="mt-5 text-xs text-slate-500">All member listings are subject to our safety standards and moderator action.</p>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#d8ae59]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#10182f] p-6 shadow-[0_30px_80px_rgba(0,0,0,.32)] sm:p-8">
                <div className="flex items-start justify-between border-b border-white/10 pb-6">
                  <div><p className="text-xs font-medium tracking-[.16em] text-[#e1c687] uppercase">Your NiteVow</p><h2 className="mt-2 font-serif text-3xl">Made to feel private.</h2></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-emerald-200"><LockKeyhole className="h-4 w-4" /></span>
                </div>
                <div className="space-y-4 py-6">
                  <div className="flex gap-4 rounded-2xl bg-white/5 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e1c687]/10 text-[#e1c687]">01</span><div><p className="font-medium">Choose your presence</p><p className="mt-1 text-sm leading-6 text-slate-400">Set an anonymized name, a short profile, and your city only.</p></div></div>
                  <div className="flex gap-4 rounded-2xl bg-white/5 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e1c687]/10 text-[#e1c687]">02</span><div><p className="font-medium">Connect with confidence</p><p className="mt-1 text-sm leading-6 text-slate-400">Verification signals and accessible safeguards set the tone.</p></div></div>
                  <div className="flex gap-4 rounded-2xl bg-white/5 p-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e1c687]/10 text-[#e1c687]">03</span><div><p className="font-medium">Stay in control</p><p className="mt-1 text-sm leading-6 text-slate-400">Discreet reports and alerts give you a direct line to moderation.</p></div></div>
                </div>
                <button onClick={() => setLocation("/safety")} className="w-full rounded-xl border border-white/12 py-3 text-sm font-medium text-slate-200 transition hover:border-[#e1c687]/50 hover:text-[#e1c687]">Explore our safety approach</button>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><p className="eyebrow">A quieter standard</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Trust should be felt in the details.</h2></div>
            <div className="grid gap-4 sm:grid-cols-3">{principles.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-2xl border border-white/9 bg-white/[.035] p-5"><Icon className="h-5 w-5 text-[#e1c687]" /><h3 className="mt-7 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></article>)}</div>
          </div>
        </section>
        <section className="border-y border-white/8 bg-[#0c1326]">
          <div className="container grid items-center gap-8 py-16 md:grid-cols-[1fr_auto] md:py-20"><div><p className="eyebrow">Safety is not a setting</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">A platform designed to give members a little more ease.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">Review community standards, learn how reporting works, and find a clear path to help before you ever need it.</p></div><Button onClick={() => setLocation("/safety")} variant="outline" className="h-12 rounded-xl border-white/15 bg-transparent px-6 text-white hover:bg-white/5 hover:text-white">Safety center <ArrowRight className="ml-2 h-4 w-4" /></Button></div>
        </section>
      </main>
      <footer className="container flex flex-col gap-4 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span className="font-serif text-lg text-slate-300">NiteVow</span><span>Adult-only community · City-level privacy · Moderated standards</span></footer>
    </div>
  );
}

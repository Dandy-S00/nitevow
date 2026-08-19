import { ArrowRight, EyeOff, ShieldCheck, Sparkles } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const AGE_KEY = "nitevow-age-confirmed";

export default function AgeGate({ children }: { children: ReactNode }) {
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  useEffect(() => {
    setConfirmed(localStorage.getItem(AGE_KEY) === "true");
  }, []);

  if (confirmed === null) return <div className="min-h-screen bg-[#070b18]" />;
  if (confirmed) return <>{children}</>;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050812] text-white">
      <div className="absolute inset-0 bg-[url('/manus-storage/nitevow-midnight-wave_a9c163b2.jpg')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(218,183,111,.2),transparent_24rem),linear-gradient(135deg,rgba(4,8,23,.5),rgba(5,8,18,.94))]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-10 sm:px-8">
        <section className="grid w-full overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/55 shadow-[0_30px_120px_rgba(0,0,0,.42)] backdrop-blur-xl lg:grid-cols-[1.08fr_.92fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="mb-16 flex items-center gap-3 text-sm font-medium tracking-[.18em] text-[#e1c687] uppercase">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e1c687]/40 bg-[#e1c687]/10"><Sparkles className="h-4 w-4" /></span>
              NiteVow
            </div>
            <p className="eyebrow">Private connections, thoughtfully held</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[.96] sm:text-6xl lg:text-7xl">A considered space for adult connection.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">NiteVow is an adult-only platform built around discretion, personal agency, and clear community standards.</p>
            <div className="mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="mb-4 h-5 w-5 text-[#e1c687]" />
                <p className="font-medium">Safety-led by design</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">Discreet alerts, reporting, and moderation tools are always close at hand.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <EyeOff className="mb-4 h-5 w-5 text-[#e1c687]" />
                <p className="font-medium">Identity on your terms</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">Use an anonymized display name and city-level location only.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white/[.06] p-7 sm:p-12 lg:p-14">
            <div className="w-full rounded-[1.5rem] border border-white/15 bg-[#0b1124]/80 p-7 shadow-2xl sm:p-9">
              <p className="text-sm font-medium tracking-[.16em] text-[#e1c687] uppercase">Age confirmation</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Are you at least 18?</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">You must be 18 or older to enter NiteVow. By continuing, you confirm that you meet this requirement and agree to use the platform respectfully.</p>
              <Button
                onClick={() => { localStorage.setItem(AGE_KEY, "true"); setConfirmed(true); }}
                className="mt-8 h-12 w-full rounded-xl bg-[#e1c687] text-[#10172c] hover:bg-[#f0da9f]"
              >
                I am 18 or older <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://www.google.com" className="mt-5 block text-center text-sm text-slate-400 transition hover:text-white">I am not eligible to enter</a>
              <p className="mt-9 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">The platform does not display profiles, listings, or other member content until eligibility has been confirmed.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

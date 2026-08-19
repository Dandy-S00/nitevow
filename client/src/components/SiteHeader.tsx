import { Menu, MoonStar, Plus, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Discover", path: "/browse" },
  { label: "How safety works", path: "/safety" },
  { label: "Your space", path: "/profile" },
];

export default function SiteHeader() {
  const [, setLocation] = useLocation();
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#080d1df2] backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-5">
        <button onClick={() => setLocation("/")} className="group flex items-center gap-3 text-left" aria-label="NiteVow home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e1c687]/40 bg-[#e1c687]/10 text-[#e1c687] transition group-hover:bg-[#e1c687]/20"><MoonStar className="h-4 w-4" /></span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-tight text-white">NiteVow</span>
            <span className="mt-1 block text-[10px] font-medium tracking-[.18em] text-slate-500 uppercase">Private connections</span>
          </span>
        </button>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => <button key={link.path} onClick={() => setLocation(link.path)} className="text-sm text-slate-300 transition hover:text-[#e1c687]">{link.label}</button>)}
        </nav>
        <div className="flex items-center gap-2">
          {!loading && isAuthenticated ? (
            <>
              <button onClick={() => setLocation("/post")} className="hidden items-center gap-2 rounded-xl bg-[#e1c687] px-4 py-2.5 text-sm font-semibold text-[#10172c] transition hover:bg-[#f0da9f] sm:flex"><Plus className="h-4 w-4" /> Create listing</button>
              <button onClick={() => setLocation("/inbox")} className="hidden rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-200 transition hover:border-[#e1c687]/50 hover:text-white md:block">Messages</button>
              <button onClick={logout} className="hidden text-xs text-slate-500 transition hover:text-slate-200 lg:block">Sign out</button>
              <button onClick={() => setLocation("/profile")} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-[#e1c687]" aria-label="Open your profile">{(user?.name || "V").slice(0, 1).toUpperCase()}</button>
            </>
          ) : (
            <Button onClick={() => startLogin()} className="h-10 rounded-xl bg-[#e1c687] px-4 text-sm font-semibold text-[#10172c] hover:bg-[#f0da9f]"><ShieldCheck className="mr-2 h-4 w-4" />Sign in</Button>
          )}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 md:hidden" aria-label="Open navigation"><Menu className="h-4 w-4" /></button>
        </div>
      </div>
    </header>
  );
}

import AgeGate from "@/components/AgeGate";
import AdminStudio from "@/pages/AdminStudio";
import Browse from "@/pages/Browse";
import Inbox from "@/pages/Inbox";
import MemberProfile from "@/pages/MemberProfile";
import PostListing from "@/pages/PostListing";
import Profile from "@/pages/Profile";
import ReportListing from "@/pages/ReportListing";
import SafetyCenter from "@/pages/SafetyCenter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/browse" component={Browse} />
    <Route path="/profile" component={Profile} />
    <Route path="/member/:id" component={MemberProfile} />
    <Route path="/post" component={PostListing} />
    <Route path="/inbox" component={Inbox} />
    <Route path="/report/listing/:id" component={ReportListing} />
    <Route path="/safety" component={SafetyCenter} />
    <Route path="/studio" component={AdminStudio} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><AgeGate><Router /></AgeGate></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

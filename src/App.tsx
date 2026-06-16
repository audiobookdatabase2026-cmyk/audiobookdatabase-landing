import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Menu, Database, Search, Link2 } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const queryClient = new QueryClient();

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.png" alt="AudioBookDatabase Logo" className="h-8 object-contain" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-foreground transition-colors">About</a>
            <a href="#publishers" onClick={(e) => { e.preventDefault(); scrollTo('publishers'); }} className="hover:text-foreground transition-colors">For Publishers</a>
            <a href="#affiliate-disclosure" onClick={(e) => { e.preventDefault(); scrollTo('affiliate-disclosure'); }} className="hover:text-foreground transition-colors">Affiliate Disclosure</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="text-lg font-medium">About</a>
                  <a href="#publishers" onClick={(e) => { e.preventDefault(); scrollTo('publishers'); }} className="text-lg font-medium">For Publishers</a>
                  <a href="#affiliate-disclosure" onClick={(e) => { e.preventDefault(); scrollTo('affiliate-disclosure'); }} className="text-lg font-medium">Affiliate Disclosure</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="text-lg font-medium">Contact</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 md:py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-4xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Discover audiobooks across platforms, publishers and narrators.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                AudioBookDatabase is building a global discovery and metadata platform for audiobooks — helping listeners find titles, compare availability and explore narrators, authors and publishers in one place.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" onClick={() => scrollTo('contact')}>
                  Contact us
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" onClick={() => scrollTo('about')}>
                  Learn more
                </Button>
              </div>
              <p className="text-sm text-muted-foreground/80 font-medium">
                Currently in development. Affiliate and publisher partnerships are being evaluated.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-gray-50/50 border-y">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">What We Are Building</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Database className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">Audiobook metadata</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    Structured information about titles, authors, narrators, publishers, languages, categories and availability.
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Search className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">Discovery and comparison</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    Helping listeners discover audiobooks and compare where they are available.
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Link2 className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">Publisher and affiliate integrations</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    Preparing integrations with audiobook stores, publishers and affiliate networks.
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Informational Sections */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl flex flex-col gap-24">
            
            <FadeIn>
              <div id="affiliate" className="scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight mb-6">For affiliate networks</h2>
                <div className="prose prose-slate max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    AudioBookDatabase.com is being developed as a content, discovery and comparison platform for audiobooks. We intend to use affiliate links transparently where relevant, helping users find audiobook services, retailers and offers.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      Clear editorial and commercial separation
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      Transparent affiliate disclosure
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      No misleading advertising
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      User-first recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      GDPR-conscious data handling
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary mt-1">•</span>
                      Long-term focus on high-quality audiobook discovery
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="publishers" className="scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight mb-6">For publishers and platforms</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are preparing a structured platform where audiobook publishers, distributors and platforms can improve visibility for their catalogues through metadata, discovery pages and future partnership integrations.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="affiliate-disclosure" className="scroll-mt-24 p-8 rounded-2xl bg-gray-50/80 border">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Affiliate disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some links on AudioBookDatabase.com may become affiliate links. This means we may earn a commission if a visitor clicks a link and completes a qualifying purchase or registration. This will not affect the price paid by the user. Our goal is to provide useful, transparent and relevant audiobook discovery.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="about" className="scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight mb-6">About AudioBookDatabase</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AudioBookDatabase is an early-stage project based in Stockholm, Sweden. The platform is currently under development and aims to become a comprehensive discovery layer for audiobooks, narrators, authors, publishers and listening platforms.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="privacy" className="scroll-mt-24">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Privacy notice</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AudioBookDatabase.com does not currently collect personal user accounts or payment information. If visitors contact us by email, their information will only be used to respond to the enquiry. Future services will include a full privacy policy before launch.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="contact" className="scroll-mt-24 p-8 md:p-12 rounded-3xl bg-slate-900 text-white text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact</h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  For affiliate partnerships, publisher enquiries or early collaboration, contact us at <a href="mailto:audiobookdatabase2026@gmail.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 transition-colors">audiobookdatabase2026@gmail.com</a>.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
                  <span>Stockholm, Sweden</span>
                  <span className="hidden sm:inline">•</span>
                  <span>AudioBookDatabase.com</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <img src="/logo.png" alt="AudioBookDatabase" className="h-6 object-contain grayscale opacity-50" />
            <span>© 2026 AudioBookDatabase. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => scrollTo('affiliate-disclosure')} className="hover:text-foreground transition-colors">Affiliate Disclosure</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-foreground transition-colors">Contact</button>
            <button onClick={() => scrollTo('privacy')} className="hover:text-foreground transition-colors">Privacy Notice</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

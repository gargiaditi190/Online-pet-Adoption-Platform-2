import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Search, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold text-foreground">PawsAdopt</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/browse">
              <Button variant="ghost">Browse Pets</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">My Dashboard</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline">Admin</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Find Your Perfect Pet Companion
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Discover loving pets waiting for their forever homes. Browse, connect, and start your adoption journey today.
        </p>
        <Link href="/browse">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Search className="w-5 h-5 mr-2" />
            Start Browsing
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Search className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Easy Search</h3>
            <p className="text-muted-foreground">Filter by breed, age, size, and more to find your ideal match.</p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Save Favorites</h3>
            <p className="text-muted-foreground">Keep track of pets you love and revisit them anytime.</p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Simple Process</h3>
            <p className="text-muted-foreground">Apply for adoption with just a few clicks and get matched.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

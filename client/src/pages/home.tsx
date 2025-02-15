import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/service-card";
import { Briefcase, Building2, Shield, Car, Coins } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Secure Your Financial Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Expert wealth management solutions tailored to your unique needs and aspirations.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/who-we-serve">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              title="Wealth Management"
              description="Comprehensive investment solutions including mutual funds, bonds, and startup investments."
              icon={Briefcase}
            />
            <ServiceCard
              title="Insurance"
              description="Protect what matters most with our personal and business insurance solutions."
              icon={Shield}
            />
            <ServiceCard
              title="Real Estate"
              description="Access premium commercial real estate opportunities through fractional ownership."
              icon={Building2}
            />
            <ServiceCard
              title="Leasing Solutions"
              description="Flexible leasing options for vehicles, equipment, and machinery."
              icon={Car}
            />
            <ServiceCard
              title="Loan Services"
              description="Wide range of loan options to meet your personal and business needs."
              icon={Coins}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹1000Cr+</div>
              <div className="text-sm text-muted-foreground">Assets Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Expert Advisors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/service-card";
import { Briefcase, Building2, Shield, Car, Coins } from "lucide-react";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInterval } from "@/lib/hooks";
import Autoplay from "embla-carousel-autoplay";

interface Offer {
  id: number;
  title: string;
  description: string;
  category: string;
  discount?: string;
  validUntil?: string;
  image?: string;
}

export default function Home() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayInterval = 5000; // 5 seconds

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/offers");
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const nextOffer = useCallback(() => {
    if (offers.length > 0) {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }
  }, [offers.length]);

  const prevOffer = useCallback(() => {
    if (offers.length > 0) {
      setCurrentOfferIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
    }
  }, [offers.length]);

  // We're now using the embla-carousel-autoplay plugin instead of useInterval
  // This will be handled by the Autoplay plugin passed to the Carousel component

  // Format the date in a readable format
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-[70vh] pt-0 pb-0">
        {loading ? (
          // Loading state
          <div className="h-full flex items-center justify-center">
            <div className="animate-pulse">Loading offers...</div>
          </div>
        ) : offers.length > 0 ? (
          // Modern Carousel with autoplay
          <Carousel 
            className="w-full h-full relative"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: autoplayInterval,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            onSelect={(index) => setCurrentOfferIndex(index)}
          >
            <CarouselContent className="h-full">
              {offers.map((offer) => (
                <CarouselItem key={offer.id} className="h-full">
                  <div
                    className="relative w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: offer.image 
                        ? `url(${offer.image})` 
                        : `url(https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50">
                      <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-center relative z-20 p-8">
                        <div className="text-sm uppercase tracking-wide mb-2 text-primary">Special Offer</div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
                          {offer.title}
                        </h1>
                        {offer.discount && (
                          <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-lg font-bold mb-4">
                            {offer.discount}
                          </div>
                        )}
                        <div 
                          className="text-xl text-white/90 max-w-2xl mb-8"
                          dangerouslySetInnerHTML={{ __html: offer.description.substring(0, 200) + (offer.description.length > 200 ? '...' : '') }}
                        />
                        {offer.validUntil && (
                          <div className="text-sm text-white/80 mb-6">
                            Valid Until: {formatDate(offer.validUntil)}
                          </div>
                        )}
                        <Button asChild size="lg" className="hover:scale-105 transition-transform">
                          <Link href={`/offers/${offer.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 text-white hover:bg-black/70 border-none" />
            <CarouselNext className="right-4 bg-black/50 text-white hover:bg-black/70 border-none" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOfferIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentOfferIndex ? "bg-primary w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        ) : (
          // Default static banner when no offers
          <div 
            className="h-full bg-gradient-to-b from-primary/10 to-background"
            style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Secure Your Financial Future
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Expert wealth management solutions tailored to your unique needs and aspirations.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="hover:scale-105 transition-transform">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  <Link href="/who-we-serve">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
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

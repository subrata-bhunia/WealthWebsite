import { useState, useEffect, useCallback, useRef } from "react";
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
  const apiRef = useRef<any>(null); // Added ref to store the carousel API
  const plugin = useRef(null);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("/api/offers");
        if (response.ok) {
          const data = await response.json();
          setOffers(data);
          setCount(data.length);
          setCurrent(0)
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
    if (offers.length > 0 && api) {
      api.scrollTo(api.scrollSnapList.indexOf(current) + 1);
      setCurrent(api.scrollSnapList.indexOf(current) + 1)

    }
  }, [offers.length, api, current]);

  const prevOffer = useCallback(() => {
    if (offers.length > 0 && api) {
      api.scrollTo(api.scrollSnapList.indexOf(current) - 1);
      setCurrent(api.scrollSnapList.indexOf(current) - 1)
    }
  }, [offers.length, api, current]);

  useEffect(() => {
    if(api){
       plugin.current = Autoplay({
        delay: autoplayInterval,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
       });
    }
   
  }, [api, autoplayInterval])


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
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">
                Special Offers
              </h2>
              <div className="relative">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  plugins={[plugin.current]}
                  onMouseEnter={() => api?.stop()}
                  onMouseLeave={() => api?.play()}
                  setApi={setApi}
                  className="w-full max-w-5xl mx-auto"
                >
                  <CarouselContent>
                    {offers.map((offer) => (
                      <CarouselItem key={offer.id}>
                        <div className="bg-card rounded-xl overflow-hidden shadow-lg p-8 mx-2 md:mx-4 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                          {offer.image && (
                            <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                              <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                          )}
                          <h3 className="text-2xl font-semibold mb-3">
                            {offer.title}
                          </h3>
                          <div
                            className="prose prose-sm flex-grow mb-4"
                            dangerouslySetInnerHTML={{
                              __html: offer.description,
                            }}
                          />
                          <div className="flex flex-wrap items-center justify-between mt-auto">
                            {offer.discount && (
                              <div className="mb-2 md:mb-0 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md font-medium">
                                {offer.discount}
                              </div>
                            )}
                            {offer.validUntil && (
                              <p className="text-sm text-muted-foreground">
                                Valid until: {formatDate(offer.validUntil)}
                              </p>
                            )}
                          </div>
                          <div className="mt-6">
                            <Button asChild className="w-full">
                              <Link href={`/offers/${offer.id}`}>
                                Learn More
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                {/* Carousel indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      className={`h-2.5 rounded-full transition-all ${
                        index === current ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Default static banner when no offers
          <div
            className="h-full bg-gradient-to-b from-primary/10 to-background"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Secure Your Financial Future
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Expert wealth management solutions tailored to your unique needs
                and aspirations.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform"
                >
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
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                ₹1000Cr+
              </div>
              <div className="text-sm text-muted-foreground">
                Assets Managed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Expert Advisors
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
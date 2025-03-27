import { Link } from "wouter";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
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
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(
          "https://wealth-backend-production.up.railway.app/api/offers"
        );
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

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner / Carousel */}
      {offers && offers.length > 0 ? (
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[autoplayPlugin.current]}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  {offers.map((offer, index) => (
                    <CarouselItem key={index}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4">
                        <div className="space-y-4">
                          {offer.category && (
                            <Badge variant="secondary" className="mb-2">
                              {offer.category}
                            </Badge>
                          )}
                          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {offer.title}
                          </h2>
                          <div
                            className="text-muted-foreground"
                            dangerouslySetInnerHTML={{
                              __html:
                                offer.description.substring(0, 150) + "...",
                            }}
                          />
                          {offer.discount && (
                            <p className="text-xl font-semibold text-primary">
                              {offer.discount}
                            </p>
                          )}
                          {offer.validUntil && (
                            <p className="text-sm text-muted-foreground">
                              Valid until: {offer.validUntil}
                            </p>
                          )}
                          <Button asChild className="mt-4">
                            <Link href={`/offers/${offer.id}`}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                        {offer.image && (
                          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <img
                              src={offer.image}
                              alt={offer.title}
                              className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {offers.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      index === current
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-primary/30"
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
          <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-center py-24">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Secure Your Financial Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Expert guidance and personalized solutions to help you achieve
              your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of financial services tailored to your
              unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Wealth Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive wealth management solutions to help you build,
                  preserve, and transfer wealth.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/wealth-management">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Insurance Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Protect your assets and loved ones with our comprehensive
                  insurance solutions.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/insurance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Real Estate & Mortgages
                </h3>
                <p className="text-muted-foreground mb-4">
                  Expert guidance on real estate investments and mortgage
                  solutions for your needs.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/real-estate">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Why Choose WealthSpire?
                </h2>
                <p className="text-muted-foreground mb-6">
                  At WealthSpire, we believe in a personalized approach to
                  financial planning. Our team of experienced professionals is
                  dedicated to helping you achieve your financial goals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Personalized Approach:
                      </strong>{" "}
                      Tailored financial strategies based on your unique
                      situation and goals.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Experienced Advisors:
                      </strong>{" "}
                      Our team brings decades of industry experience to serve
                      you.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Comprehensive Solutions:
                      </strong>{" "}
                      Access to a wide range of financial products and services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      <strong className="font-medium">
                        Client-Centered Focus:
                      </strong>{" "}
                      Your success is our top priority – always.
                    </span>
                  </li>
                </ul>
                <Button asChild className="mt-8">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-video shadow-xl">
                <img
                  src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Schedule a consultation with one of our financial advisors today
              and take the first step towards financial freedom.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="font-semibold"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

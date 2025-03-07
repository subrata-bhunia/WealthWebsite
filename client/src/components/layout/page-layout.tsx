import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {useEffect} from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  callToAction?: boolean;
  heroImageUrl?: string;
}
const image = "https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg"
export function PageLayout({ heroImageUrl=image,title, subtitle, children, callToAction = true }: PageLayoutProps) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full width with centered content */}
      {/*<section className="w-full pt-24 pb-12 bg-primary/5">*/}
      {/*  <div className="container mx-auto px-4 text-center">*/}
      {/*    <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>*/}
      {/*    {subtitle && (*/}
      {/*      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">*/}
      {/*        {subtitle}*/}
      {/*      </p>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</section>*/}
        {/* Hero Section - Full width with centered content and background image */}
        <section
            className="w-full pt-24 pb-12 bg-cover bg-center relative h-[40vh] justify-center "
            style={{
                backgroundImage: `url(${heroImageUrl})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div> {/* Semi-transparent overlay */}
            <div className="relative container mx-auto px-4 text-center text-white flex flex-col justify-center h-full" >
                <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-xl max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>


        {/* Content Section - Centered with proper spacing */}
      <section className="flex-1 w-full py-12">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>

      {/* Call to Action - Full width with centered content */}
      {callToAction && (
        <section className="w-full py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team of experts to learn more about how we can help you achieve your financial goals.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
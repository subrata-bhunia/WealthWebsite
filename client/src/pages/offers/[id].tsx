import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";

interface Offer {
  id: number;
  title: string;
  description: string;
  category: string;
  discount?: string;
  validUntil?: string;
  image?: string;
}

export default function OfferDetailPage() {
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfferDetails = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/api/offers/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log("offer details", data);
          setOffer(data);
        } else {
          setError("Offer not found");
        }
      } catch (error) {
        console.error("Error fetching offer details:", error);
        setError("An error occurred while fetching offer details");
      } finally {
        setLoading(false);
      }
    };

    fetchOfferDetails();
  }, [id]);

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

  if (loading) {
    return (
      <PageLayout title="Loading...">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">Loading offer details...</div>
        </div>
      </PageLayout>
    );
  }

  if (error || !offer) {
    return (
      <PageLayout title="Offer Not Found">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {error || "Offer not found"}
            </p>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={offer.title}
      heroImageUrl={
        offer.image ||
        "https://img.freepik.com/free-photo/table-with-finance-work-stuff-coffee-money-tablet-pen-papers_1268-17457.jpg"
      }
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>

        {offer.discount && (
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
              {offer.discount}
            </div>
          </div>
        )}

        {offer.validUntil && (
          <div className="flex items-center text-muted-foreground mb-8">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Valid Until: {formatDate(offer.validUntil)}</span>
          </div>
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: offer.description }}
        />

        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/contact">Contact Us About This Offer</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
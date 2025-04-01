import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { authFetch } from "@/components/admin/blog-management";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Offer = {
  id: number;
  title: string;
  description: string;
  category: string;
  discount?: string;
  validUntil?: string;
  image?: string;
  createdAt: string;
};

const RichTextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (content: string) => void;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "link"],
      ["list", "blockquote", "code-block"],
    ],
  };
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
      className="max-h-[50vh] overflow-x-scroll"
    />
  );
};

export function OfferManagement() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newOffer, setNewOffer] = useState<Omit<Offer, "id" | "createdAt">>({
    title: "",
    description: "",
    category: "lease",
    discount: "",
    validUntil: "",
    image: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedOffer, setEditedOffer] = useState<Offer | null>(null);
  const { toast } = useToast();

  const fetchOffers = async () => {
    setLoading(true);
    try {
      const response = await authFetch("/api/offers");
      if (!response.ok) {
        throw new Error("Failed to fetch offers");
      }
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load offers",
        variant: "destructive",
        id: "1",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, [toast]);

  const handleCreateOffer = async () => {
    try {
      const response = await authFetch("/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOffer),
      });

      if (!response.ok) {
        throw new Error("Failed to create offer");
      }

      toast({
        title: "Success",
        description: "Offer created successfully",
        variant: "default",
        id: "2",
      });

      await fetchOffers();
      setDialogOpen(false);
      setNewOffer({
        title: "",
        description: "",
        category: "lease",
        discount: "",
        validUntil: "",
        image: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create offer",
        variant: "destructive",
        id: "3",
      });
    }
  };

  const handleEditOffer = async () => {
    if (!editedOffer) return;

    try {
      const response = await authFetch(`/api/offers/${editedOffer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedOffer),
      });

      if (!response.ok) {
        throw new Error("Failed to update offer");
      }

      toast({
        title: "Success",
        description: "Offer updated successfully",
        variant: "default",
        id: "4",
      });

      await fetchOffers();
      setDialogOpen(false);
      setIsEditMode(false);
      setEditedOffer(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update offer",
        variant: "destructive",
        id: "5",
      });
    }
  };

  const handleDeleteOffer = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this offer?")) {
      return;
    }

    try {
      const response = await authFetch(`/api/offers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete offer");
      }

      toast({
        title: "Success",
        description: "Offer deleted successfully",
        variant: "default",
        id: "6",
      });

      await fetchOffers();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete offer",
        variant: "destructive",
        id: "7",
      });
    }
  };

  const handleEdit = (offer: Offer) => {
    setIsEditMode(true);
    setEditedOffer(offer);
    setDialogOpen(true);
  };

  const handleNewOffer = () => {
    setIsEditMode(false);
    setEditedOffer(null);
    setDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const offerCategories = ["lease", "loan", "insurance", "investment", "other"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Offers Management</h2>
        <Button onClick={handleNewOffer}>New Offer</Button>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading offers...</div>
      ) : offers.length === 0 ? (
        <div className="text-center py-8">
          No offers found. Create your first offer.
        </div>
      ) : (
        <div className="grid gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{offer.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Category: {offer.category} | Created:{" "}
                  {formatDate(offer.createdAt)}
                </p>
                {offer.validUntil && (
                  <p className="text-sm text-muted-foreground">
                    Valid until: {formatDate(offer.validUntil)}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(offer)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteOffer(offer.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Edit Offer" : "Create New Offer"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                placeholder="Enter offer title"
                value={isEditMode ? editedOffer?.title || "" : newOffer.title}
                onChange={(e) => {
                  if (isEditMode && editedOffer) {
                    setEditedOffer({ ...editedOffer, title: e.target.value });
                  } else {
                    setNewOffer({ ...newOffer, title: e.target.value });
                  }
                }}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select
                value={
                  isEditMode
                    ? editedOffer?.category || "lease"
                    : newOffer.category
                }
                onValueChange={(value) => {
                  if (isEditMode && editedOffer) {
                    setEditedOffer({ ...editedOffer, category: value });
                  } else {
                    setNewOffer({ ...newOffer, category: value });
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {offerCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="discount" className="text-sm font-medium">
                Discount (if applicable)
              </label>
              <Input
                id="discount"
                placeholder="e.g., 10% off, Free first month"
                value={
                  isEditMode
                    ? editedOffer?.discount || ""
                    : newOffer.discount || ""
                }
                onChange={(e) => {
                  if (isEditMode && editedOffer) {
                    setEditedOffer({
                      ...editedOffer,
                      discount: e.target.value,
                    });
                  } else {
                    setNewOffer({ ...newOffer, discount: e.target.value });
                  }
                }}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="validUntil" className="text-sm font-medium">
                Valid Until
              </label>
              <Input
                id="validUntil"
                type="date"
                value={
                  isEditMode
                    ? editedOffer?.validUntil || ""
                    : newOffer.validUntil || ""
                }
                onChange={(e) => {
                  if (isEditMode && editedOffer) {
                    setEditedOffer({
                      ...editedOffer,
                      validUntil: e.target.value,
                    });
                  } else {
                    setNewOffer({ ...newOffer, validUntil: e.target.value });
                  }
                }}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="image" className="text-sm font-medium">
                Image URL
              </label>
              <Input
                id="image"
                placeholder="Image URL (optional)"
                value={
                  isEditMode ? editedOffer?.image || "" : newOffer.image || ""
                }
                onChange={(e) => {
                  if (isEditMode && editedOffer) {
                    setEditedOffer({ ...editedOffer, image: e.target.value });
                  } else {
                    setNewOffer({ ...newOffer, image: e.target.value });
                  }
                }}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <div className="min-h-[150px]">
                <RichTextEditor
                  value={
                    isEditMode
                      ? editedOffer?.description || ""
                      : newOffer.description
                  }
                  onChange={(content) => {
                    if (isEditMode && editedOffer) {
                      setEditedOffer({ ...editedOffer, description: content });
                    } else {
                      setNewOffer({ ...newOffer, description: content });
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={isEditMode ? handleEditOffer : handleCreateOffer}>
              {isEditMode ? "Update Offer" : "Create Offer"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

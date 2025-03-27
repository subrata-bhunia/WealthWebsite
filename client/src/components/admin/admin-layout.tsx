import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactsList } from "./contacts-list";
import { BlogManagement } from "./blog-management";
import { Button } from "@/components/ui/button";
import { isAuthenticated, isAdmin } from "@/lib/auth";
import { MediaManagement } from "./media-management";
import { OfferManagement } from "./offer-management";

export function AdminLayout() {
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if user is authenticated and is admin
    if (!isAuthenticated() || !isAdmin()) {
      navigate("/login");
    }
    setInitialized(true);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("wealthspire_auth_token"); //Added this line for logout functionality
    navigate("/");
  };

  if (!initialized || !isAuthenticated() || !isAdmin()) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full pt-24 pb-12 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Admin Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage blog posts and view contact submissions
          </p>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="mt-4"
          >
            Logout
          </Button>
        </div>
      </section>

      <section className="flex-1 w-full py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blogs" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8"> {/* Increased cols to 4 */}
              <TabsTrigger value="blogs">Blog</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger> {/* Added Offers Management */}
            </TabsList>
            <TabsContent value="blogs" className="mt-6">
              <BlogManagement />
            </TabsContent>
            <TabsContent value="contacts" className="mt-6">
              <ContactsList />
            </TabsContent>
            <TabsContent value="media" className="mt-6">
              <MediaManagement />
            </TabsContent>
            <TabsContent value="offers" className="mt-6"> {/* Added Offers Management Content */}
              <OfferManagement />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const authFetch = async (url: string) => {
  const token = localStorage.getItem("wealthspire_auth_token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  // @ts-ignore
  const response = await fetch("http://localhost:3001" + url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};

export function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); //Added error state
  const { toast } = useToast();

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await authFetch("/api/contacts");

        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError("Error loading contacts. Please try again.");
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to load contacts",
          variant: "destructive",
          id: "1",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center p-12">
        <h3 className="text-xl font-medium">No contacts yet</h3>
        <p className="text-muted-foreground mt-2">
          When users submit the contact form, they'll appear here.
        </p>
      </div>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell className="max-w-md truncate">
                  {contact.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

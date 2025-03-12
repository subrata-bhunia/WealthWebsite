
import React from "react";

interface PageTemplateProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
      {children}
    </div>
  );
}

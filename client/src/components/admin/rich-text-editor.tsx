import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  height?: number;
  id?: string;
}

export function RichTextEditor({
  value,
  onChange,
  height = 300,
  id = "editor",
}: RichTextEditorProps) {
  return (
    <Textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[300px]"
      style={{ height: `${height}px` }}
    />
  );
}
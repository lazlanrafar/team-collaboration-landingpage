import React from "react";

interface Props {
  className?: string;
  text: string;
}

export default function AtomButton({ className, text }: Props) {
  return (
    <a href="#" className={`text-sm py-2 px-4 rounded ${className}`}>
      {text}
    </a>
  );
}

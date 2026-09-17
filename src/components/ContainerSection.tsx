import React from "react";

export default function ContainerSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container mx-auto px-2 md:px-6 lg:px-12 py-6">
      {children}
    </div>
  );
}

import DescriptionComponent from "@/components/Description/DescriptionPage";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function PetDescriptionRoute() {
  return (
    <PrivateLayout>
      <div>
        <DescriptionComponent />
      </div>
    </PrivateLayout>
  );
}

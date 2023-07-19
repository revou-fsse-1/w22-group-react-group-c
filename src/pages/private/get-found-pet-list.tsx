import FoundPetList from "@/components/PetList/FoundPetList";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function getFoundPetListRoute() {
  return (
    <PrivateLayout>
      <div>
        <FoundPetList />
      </div>
    </PrivateLayout>
  );
}

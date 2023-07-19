import FindPetList from "@/components/PetList/FindPetList";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function getFindPetListRoute() {
  return (
    <PrivateLayout>
      <div>
        <FindPetList />
      </div>
    </PrivateLayout>
  );
}

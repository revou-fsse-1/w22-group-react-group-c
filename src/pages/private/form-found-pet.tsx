import FormFoundPet from "@/components/Form/FormFoundPet";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function FoundPetFormRouter() {
  return (
    <PrivateLayout>
      <div>
        <FormFoundPet />
      </div>
    </PrivateLayout>
  );
}

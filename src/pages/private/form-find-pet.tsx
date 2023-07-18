import FormFindPet from "@/components/Form/FormFindPet";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function FormFindPetRouter() {
  return (
    <PrivateLayout>
      <div>
        <FormFindPet />
      </div>
    </PrivateLayout>
  );
}

import EditFoundPetForm from "@/components/Form/EditFormFoundPet";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function EditFoundPetFormRouter() {
  return (
    <PrivateLayout>
      <div>
        <EditFoundPetForm />
      </div>
    </PrivateLayout>
  );
}

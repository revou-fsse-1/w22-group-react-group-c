import EditFindPetForm from "@/components/Form/EditFormFindPet";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function EditFindPetFormRoute() {
  return (
    <PrivateLayout>
      <div>
        <EditFindPetForm />
      </div>
    </PrivateLayout>
  );
}

import EditFindPetForm from "@/components/Form/EditFormFindPet";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function EditFindPetFormRoute() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <EditFindPetForm />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

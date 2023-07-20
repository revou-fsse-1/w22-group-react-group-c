import EditFoundPetForm from "@/components/Form/EditFormFoundPet";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function EditFoundPetFormRouter() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <EditFoundPetForm />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

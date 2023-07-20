import FormFoundPet from "@/components/Form/FormFoundPet";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function FoundPetFormRouter() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <FormFoundPet />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

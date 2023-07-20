import FormFindPet from "@/components/Form/FormFindPet";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function FormFindPetRouter() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <FormFindPet />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

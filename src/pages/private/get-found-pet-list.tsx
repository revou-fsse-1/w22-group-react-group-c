import FoundPetList from "@/components/PetList/FoundPetList";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function getFoundPetListRoute() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <FoundPetList />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

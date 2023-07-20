import FindPetList from "@/components/PetList/FindPetList";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function getFindPetListRoute() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <FindPetList />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

import DescriptionComponent from "@/components/Description/DescriptionPage";
import Layout from "@/layout/Layout";
import PrivateLayout from "@/layout/PrivateLayout";
import React from "react";

export default function PetDescriptionRoute() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <DescriptionComponent />
        </div>
      </Layout>
    </PrivateLayout>
  );
}

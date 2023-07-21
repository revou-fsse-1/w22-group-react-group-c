import Head from "next/head";
import React from "react";
import Map from "../../components/Map/Map";
import dynamic from "next/dynamic";
import PrivateLayout from "@/layout/PrivateLayout";
import Layout from "@/layout/Layout";
const DynamicMap = dynamic(() => import("../../components/Map/Map"), {
  ssr: false, // Set ssr option to false to enable client-side rendering
});

export default function map() {
  return (
    <PrivateLayout>
      <Layout>
        <div>
          <Head>
            <title>Search User Pet Map</title>
          </Head>
          <main>
            <h1>Search User Pet Map</h1>
            <DynamicMap />
          </main>
        </div>
      </Layout>
    </PrivateLayout>
  );
}

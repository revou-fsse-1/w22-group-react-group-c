import { Inter } from "next/font/google";
import Product from "@/components/Product/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

interface ProductData {
  // Define the properties of the Product type
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
  image: string;
}

interface HomeProps {
  initialData: ProductData[];
}

export default function Home({ initialData }: HomeProps) {
  const [productData, setProductData] = useState(initialData);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!initialData) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("");
      const data = response.data;

      setProductData(data);
      setError(false);
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  return (
    <Layout>
      <main
        className={`flex flex-col items-centerjustify-center px-6 py-5 ${inter.className}`}
      >
        <h1>hai</h1>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get("");
    const data = response.data;

    return {
      props: {
        initialData: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        initialData: null,
      },
      revalidate: 10,
    };
  }
}

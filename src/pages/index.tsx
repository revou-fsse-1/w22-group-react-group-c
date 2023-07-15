import { Nunito_Sans } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import dynamic from "next/dynamic";
import Carousel from "@/components/Homepage/Carousel";
import MiddleNav from "@/components/Homepage/MiddleNav";
import Video from "@/components/Homepage/Video";

// const Layout = dynamic(() => import("../layout/Layout"), { ssr: false });

const inter = Nunito_Sans({ subsets: ["latin"] });

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

  // useEffect(() => {
  //   if (!initialData) {
  //     fetchData();
  //   }
  // }, []);

  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await axios.get("");
  //     const data = response.data;

  //     setProductData(data);
  //     setError(false);
  //   } catch (error) {
  //     setError(true);
  //   }

  //   setIsLoading(false);
  // };

  return (
    <Layout>
      <main
        className={`flex flex-col items-center justify-center px-6 py-5 ${inter.className}`}
      >
        <Carousel />
        <MiddleNav />
        <Video />
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   try {
//     const response = await axios.get("");
//     const data = response.data;

//     return {
//       props: {
//         initialData: data,
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     return {
//       props: {
//         initialData: null,
//       },
//       revalidate: 10,
//     };
//   }
// }

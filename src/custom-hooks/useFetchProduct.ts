import axios from "axios";
import useSWR from "swr";

interface Product {
  // Define the properties of the Product type
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
  image: string;
}

interface FetchProductResponse {
  data: Product[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
}

function useFetchProduct(): FetchProductResponse {
  const { data, error, isLoading } = useSWR<Product[]>(
    "https://w17-our-backend-group-c-production.up.railway.app/products/all",
    async (url) => {
      try {
        const response = await axios.get<Product[]>(url);
        return response.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    }
  );
  console.log(data);
  return {
    data,
    isLoading: !data && !error,
    error,
  };
}

export default useFetchProduct;

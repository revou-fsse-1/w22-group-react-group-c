import PrivateLayout from "@/layout/PrivateLayout";
import { Wishlist } from "@/pages/private/wishlist";
import axios from "axios";
import { useEffect, useState } from "react";

interface Wishlists {
  id?: number;
  name: string;
  userId?: number;
}
interface WishlistProps {
  initialData: Wishlists[];
}

const PrivateWishlist = ({ initialData }: WishlistProps) => {
  const [wishlistData, setWishlistData] = useState(initialData);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetchData(token);
    }
  }, []);

  const fetchData = async (token: string) => {
    try {
      const response = await axios.get(
        "https://w17-our-backend-group-c-production.up.railway.app/wishlists",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const initialData = response.data;
      setWishlistData(initialData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PrivateLayout>
      <Wishlist initialData={wishlistData} />
    </PrivateLayout>
  );
};

export default PrivateWishlist;

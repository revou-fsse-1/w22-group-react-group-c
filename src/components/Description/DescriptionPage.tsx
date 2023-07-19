import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PetData {
  id: string;
  title: string;
  description: string;
  name: string;
  location: string;
  locationDetail: string;
  species: string;
  contact: string;
  image: string;
  isFound: boolean;
}

export default function DescriptionComponent() {
  const [data, setData] = useState<PetData[] | any>([]);
  const router = useRouter();
  const { id, type } = router.query;

  const fetchData = async (id: string) => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await axios.get(
        `https://wheremypets-backend-production.up.railway.app/${type}/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(response.data);
      window.localStorage.setItem("latestDataId", id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if there's a stored ID in local storage
    const storedId = window.localStorage.getItem("latestDataId");

    // Fetch data only if the id exists in the query or local storage
    if (id || storedId) {
      // Use the ID from local storage if it exists, or use the ID from the query
      const fetchId = id || storedId;
      fetchData(fetchId as string);
    }
  }, [id]);

  console.log(data);
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <>
          <h1 className="mb-6 text-3xl font-bold text-center">{data.title}</h1>
          <section className="mb-32">
            <img
              src={data.image}
              className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt="image"
            />

            <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mb-10">
              <div className="flex flex-col pb-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Nama User
                </dt>
                <dd className="text-lg text-black font-semibold">
                  {data.name}
                </dd>
              </div>
              <div className="flex flex-col py-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Lokasi :
                </dt>
                <dd className="text-lg text-black font-semibold">
                  {data.location}
                </dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Lokasi Spesifik :
                </dt>
                <dd className="text-lg font-semibold text-black">
                  {data.locationDetail}
                </dd>
              </div>
              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Jenis Hewan :
                </dt>
                <dd className="text-lg font-semibold text-black">
                  {data.species}
                </dd>
              </div>

              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Kontak :
                </dt>
                <dd className="text-lg font-semibold text-black">
                  {data.contact}
                </dd>
              </div>

              <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Status :
                </dt>
                <dd className="text-lg font-semibold text-black">
                  {data.isFound ? "DITEMUKAN" : "BELUM DITEMUKAN"}
                </dd>
              </div>
            </dl>

            <h1 className="mb-6 text-3xl font-bold text-center">DESKRIPSI</h1>

            <p>{data.description}</p>
          </section>
        </>
      </div>
    </>
  );
}

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ArrowPathIcon,
  TrashIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

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
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { id, type } = router.query;

  const handleChangeStatus = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const updatedData = { ...data, isFound: !data.isFound }; // Toggle the value of `isFound`
      await axios.patch(
        // Replace "put" with "patch" if you are using a PATCH request
        `https://wheremypets-backend-production.up.railway.app/${type}/${id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(updatedData); // Update the local state with the updated data
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (type: string | string[] | undefined) => {
    // Redirect to the edit page and pass the current id and type as query parameters
    router.push(`/private/edit-form-${type}-pet?id=${id}`);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDelete = async (id: string | string[] | undefined) => {
    try {
      const token = window.localStorage.getItem("token");
      await axios.delete(
        `https://wheremypets-backend-production.up.railway.app/${type}/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="container py-32 p-2 mx-auto md:px-6">
        <>
          <h1 className="mb-6 text-3xl font-bold text-center uppercase">
            {data.title}
          </h1>
          <section className="mb-32">
            <div className="flex justify-center items-center">
              <img
                src={data.image}
                className="mb-6 w-[35rem] rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>

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

            <div className="flex items-center gap-4">
              <Button
                onClick={handleChangeStatus}
                variant="gradient"
                color="green"
                className="hidden md:flex items-center gap-3"
              >
                <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
                Change Status
              </Button>
              <Button
                onClick={() => handleEdit(type)}
                variant="gradient"
                color="green"
                className="flex items-center gap-3"
              >
                <DocumentChartBarIcon strokeWidth={2} className="h-5 w-5" />
                Edit
              </Button>

              <Button
                className="flex items-center gap-3"
                onClick={handleOpen}
                variant="gradient"
                color="red"
              >
                <TrashIcon strokeWidth={2} className="h-5 w-5" />
                Delete
              </Button>
              <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}
              >
                <DialogHeader>
                  <span className="font-bold text-2xl">Are you sure?</span>
                </DialogHeader>
                <DialogBody divider>
                  Dengan menekan tombol confirm, anda akan mendelete post ini.
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button
                    variant="gradient"
                    color="green"
                    onClick={() => handleDelete(id)}
                  >
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>

              {/* <Button variant="text" className="flex items-center gap-2">
                Read More{" "}
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button> */}
            </div>
            <Button
              onClick={handleChangeStatus}
              variant="gradient"
              color="green"
              className="flex md:hidden mt-2 items-center gap-3"
            >
              <ArrowPathIcon strokeWidth={2} className="h-5 w-5" />
              Change Status
            </Button>

            <h1 className="mb-6 text-3xl font-bold mt-6 text-center">
              DESKRIPSI
            </h1>

            <p>{data.description}</p>
          </section>
        </>
      </div>
    </>
  );
}

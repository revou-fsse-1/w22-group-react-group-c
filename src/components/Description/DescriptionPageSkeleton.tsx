import React from "react";

export default function DescriptionPageSkeleton() {
  return (
    <div className="container py-32 p-2 mx-auto md:px-6">
      <div className="animate-pulse">
        <div className="flex justify-center ">
          <h1 className="mb-6 text-3xl font-bold uppercase h-8 bg-gray-300 rounded w-1/2"></h1>
        </div>
        <section className="mb-32">
          <div className="flex justify-center items-center">
            <div className="mb-6 w-[35rem] h-[25rem] bg-gray-300 rounded-lg shadow-lg dark:shadow-black/20"></div>
          </div>

          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mb-10">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg text-black font-semibold h-8 bg-gray-300 rounded"></dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg text-black font-semibold h-8 bg-gray-300 rounded"></dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg font-semibold text-black h-8 bg-gray-300 rounded"></dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg font-semibold text-black h-8 bg-gray-300 rounded"></dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg font-semibold text-black h-8 bg-gray-300 rounded"></dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400 h-6 bg-gray-300 rounded"></dt>
              <dd className="text-lg font-semibold text-black h-8 bg-gray-300 rounded"></dd>
            </div>
          </dl>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="flex md:hidden mt-2 items-center gap-3">
            <div className="h-5 w-5 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>

          <h1 className="mb-6 text-3xl font-bold mt-6 text-center h-8 bg-gray-300 rounded w-1/2"></h1>

          <p className="h-8 bg-gray-300 rounded"></p>
        </section>
      </div>
    </div>
  );
}

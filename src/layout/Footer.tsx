export default function FooterComponent() {
  return (
    <div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a className="hover:underline">Where my Pets?</a>. All Rights
        Reserved.
      </span> */}

      <footer className="bg-[#FFD6A5]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img src="/logo-navbar.png" className="h-8 mr-3" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Features
                </h2>
                <ul className="text-gray-800 font-medium">
                  <li className="mb-4">
                    <a className="hover:underline">Found Pet List</a>
                  </li>
                  <li>
                    <a className="hover:underline">Find Pet List</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Account
                </h2>
                <ul className="text-gray-800 font-medium">
                  <li className="mb-4">
                    <a className="hover:underline ">Sign In</a>
                  </li>
                  <li>
                    <a className="hover:underline">Sign Up</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Legal
                </h2>
                <ul className="text-gray-800  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023 Where My Pets™ . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

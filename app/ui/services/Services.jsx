import React from "react";

export default function Services() {
  return (
    // <!-- component -->
    <div
      id="services"
      className="flex flex-col md:justify-center md:items-center py-2 w-full  scroll-mt-20 scroll-smooth min-h-[90vh] "
    >
      {/* <h1 className="mx-6  text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 animate__animated animate__fadeInUp">
     Services We Offer
    </h1> */}
      <div className="container xl:max-w-6xl mx-auto ">
        {/* <!-- Heading start --> */}
        <header className="flex flex-col px-4 items-center justify-center md:justify-start md:items-start ">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-center md:text-left">
            What We Do
          </h2>
          {/* <h2 className="text-2xl mb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">What We Do</h2> */}
          <p className="text-gray-500 leading-relaxed font-light text-xl pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>
        {/* <!-- End heading --> */}
        {/* <!-- row --> */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                SEO Services
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                Social Content
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                Creative ads
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                Brand Identity
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                Budget &amp; Marketing
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            {/* <!-- service block --> */}
            <div className="py-8 px-12 mb-12 dark:bg-background bg-blue-50 border-b border-gray-200 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* <!-- icon --> */}
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold ">
                Optimize conversions
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                This is a wider card with supporting text below as a natural
                content.
              </p>
            </div>
            {/* <!-- end service block --> */}
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
    </div>
  );
}

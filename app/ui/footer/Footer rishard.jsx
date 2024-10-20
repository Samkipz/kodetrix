import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex items-end w-full">
      <footer className="w-full text-gray-700 bg-gray-100 body-font dark:bg-background">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <Link
              href="/"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700"
            >
              KODETRIX
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Innovating the future today
            </p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <Link
                  href="#"
                  className="text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 uppercase title-font">
                Company
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    About
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#team" className="text-muted-foreground">
                    Meet the Team
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#" className="text-muted-foreground">
                    Blog
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#" className="text-muted-foreground">
                    Terms &amp; Privacy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 uppercase title-font">
                Services
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link href="#services" className="text-muted-foreground">
                    Custom Software Development
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#services" className="text-muted-foreground">
                    AI & Machine Learning Solutions
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#services" className="text-muted-foreground">
                    Data Analytics & Business Intelligence
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#services" className="text-muted-foreground">
                    Networking Solutions and Services
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 uppercase title-font">
                Industries
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Healthcare
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Education
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Agriculture
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Banking
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Enterprise Solution
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    FinTech
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#about" className="text-muted-foreground">
                    Smart Cities and IoT
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link href="#contact" className="text-muted-foreground">
                    Send a Message
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#hero" className="text-muted-foreground">
                    Request a Quote
                  </Link>
                </li>
                <li className="mt-3">
                  <Link href="#" className="text-muted-foreground">
                    +123-456-7890
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-primary-foreground">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 capitalize xl:text-center text-center">
              &copy; {new Date().getFullYear()}. Kodetrix Ventures. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    // <footer className="flex flex-col justify-center items-center bg-background-secondary text-foreground-primary pt-12 px-4 sm:px-6 w-full md:px-12 bottom-0 ">
    //   <div className="flex w-full flex-col lg:gap-16 items-center justify-center">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-32 pt-8 ">
    //       <div className="col-span-2 sm:col-span-1  ">
    //         <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
    //           Servicesxxx
    //         </p>
    //         <div className="mt-6">
    //           <Image
    //             src="/kodetrix.png"
    //             alt="Logo"
    //             width={140}
    //             height={50}
    //             className="h-auto w-auto"
    //           />
    //         </div>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1  ">
    //         <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
    //           Services
    //         </p>
    //         <ul className="mt-6 space-y-4 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               Custom Software Development{" "}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               AI & Machine Learning Solutions{" "}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               Data Analytics & Business Intelligence{" "}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               Networking Solutions and Services{" "}
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1  ">
    //         <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
    //           Company
    //         </p>
    //         <ul className="mt-6 space-y-4 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               About{" "}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               Meet the Team{" "}
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1  ">
    //         <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
    //           Helpful Links
    //         </p>
    //         <ul className="mt-6 space-y-4 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-muted-foreground transition hover:opacity-75"
    //             >
    //               {" "}
    //               Contact{" "}
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-span-2 sm:col-span-1  ">
    //         <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
    //           Get in touch
    //         </p>
    //         <ul className="mt-6 space-y-4 text-sm">
    //           <li>
    //             <Link
    //               href="#"
    //               rel="noreferrer"
    //               target="_blank"
    //               className="flex gap-2 text-muted-foreground transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Email</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 className="size-6"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    //                 <polyline points="22,6 12,13 2,6" />
    //               </svg>
    //               Email
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               rel="noreferrer"
    //               target="_blank"
    //               className="flex gap-2 text-muted-foreground transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Facebook</span>
    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               Facebook
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               rel="noreferrer"
    //               target="_blank"
    //               className="flex gap-2 text-muted-foreground transition hover:opacity-75"
    //             >
    //               <span className="sr-only">Instagram</span>
    //               <svg
    //                 className="size-6"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //               Instagram
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               rel="noreferrer"
    //               target="_blank"
    //               className="flex gap-2 text-muted-foreground transition hover:opacity-75"
    //             >
    //               <span className="sr-only">X (formerly Twitter)</span>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 512 512"
    //                 className="size-6"
    //                 fill="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    //               </svg>
    //               X
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-4 flex flex-col border-t border-gray-400 w-full dark:border-gray-200 py-4">
    //     <div className="sm:flex justify-center items-center px-4">
    //       <p className="text-xs text-mute-foreground text-center ">
    //         &copy; {new Date().getFullYear()}. Kodetrix Ventures. All rights
    //         reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
}

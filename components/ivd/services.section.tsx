import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { HandHeart } from "lucide-react";

const ServiceSection = () => {
  return (
    <div className="bg-white py-20 px-10">
      <header className="mx-auto text-center mb-12">
        <Badge variant={"outline"} className="gap-1">
          <HandHeart className="w-4 h-4" />
          Our Services
        </Badge>
        <h2 className="text-black font-secondary text-2xl font-bold">
          Expert Services That Define Our Excellence.
        </h2>
        <p className="text-sm">
          From creative design to technical solutions, our services define
          industry excellence.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-60">
        {/* Card */}
        <div className="bg-muted rounded-2xl p-8 flex flex-col justify-start items-start">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className=""
            >
              <g clipPath="url(#clip0_328_4041)">
                <mask
                  id="mask0_328_4041"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <path d="M40 0H0V40H40V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_328_4041)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 15.5228 24.4772 20 30 20C24.4772 20 20 24.4772 20 30C20 24.4772 15.5228 20 10 20ZM10 20C4.47716 20 0 24.4772 0 30C0 35.5228 4.47716 40 10 40C15.5228 40 20 35.5228 20 30C20 35.5228 24.4772 40 30 40C35.5228 40 40 35.5228 40 30C40 24.4772 35.5228 20 30 20C35.5228 20 40 15.5228 40 10C40 4.47716 35.5228 0 30 0C24.4772 0 20 4.47716 20 10C20 4.47716 15.5228 0 10 0C4.47716 0 0 4.47716 0 10C0 15.5228 4.47716 20 10 20Z"
                    fill="#0A0C00"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_328_4041">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-secondary text-2xl font-bold  mb-4">Branding</h3>
          <p className="text-gray-700  mb-6">
            We care success relationships fuel real success. We love building
            brands and helping.
          </p>
          <div className="">
            <Link
              href="#"
              className="text-primary font-semibold underline hover:no-underline"
            >
              View Details &rarr;
            </Link>
          </div>
        </div>
        <div className="bg-muted rounded-2xl p-8 flex flex-col justify-start items-start">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0V10.6061C0 14.6846 2.3021 18.2254 5.67777 20C2.3021 21.7746 0 25.3154 0 29.3939V40H29.3939C35.2515 40 40 35.2515 40 29.3939V28.7879C40 24.9948 37.8881 21.6949 34.7761 20C37.8881 18.3051 40 15.0052 40 11.2121V10.6061C40 4.74849 35.2515 0 29.3939 0H0ZM25.2239 20C23.024 18.8019 21.3239 16.8018 20.5163 14.3924C19.5914 16.8118 17.8059 18.8058 15.5343 20C17.8059 21.1942 19.5914 23.1882 20.5163 25.6076C21.3239 23.1982 23.024 21.1981 25.2239 20Z"
                fill="#0A0C00"
              />
            </svg>
          </div>
          <h3 className="font-secondary text-2xl font-bold  mb-4">
            Web Development
          </h3>
          <p className="text-gray-700 font-  mb-6">
            We care success relationships fuel real success. We love building
            brands and helping.
          </p>
          <div className="">
            <Link
              href="#"
              className="text-primary font-semibold underline hover:no-underline"
            >
              View Details &rarr;
            </Link>
          </div>
        </div>
        <div className="bg-muted rounded-2xl p-8 flex flex-col justify-start items-start">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clipPath="url(#clip0_328_4074)">
                <mask
                  id="mask0_328_4074"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <path d="M40 0H0V40H40V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_328_4074)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 20H0V0C11.0457 9.65646e-07 20 8.9543 20 20ZM40 20V0C28.9544 0 20 8.9543 20 20H40ZM20 40H0V20C11.0457 20 20 28.9544 20 40ZM20 40H40V20C28.9544 20 20 28.9544 20 40Z"
                    fill="#0A0C00"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_328_4074">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-secondary text-2xl font-bold  mb-4">
            Video Production
          </h3>
          <p className="text-gray-700  mb-6">
            We care success relationships fuel real success. We love building
            brands and helping.
          </p>
          <div className="">
            <Link
              href="#"
              className="text-primary font-semibold underline hover:no-underline"
            >
              View Details &rarr;
            </Link>
          </div>
        </div>
        <div className="bg-muted rounded-2xl p-8 flex flex-col justify-start items-start">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clipPath="url(#clip0_589_6150)">
                <mask
                  id="mask0_589_6150"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <path d="M40 0H0V40H40V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_589_6150)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 20L1.52588e-06 0H20H40V20C28.956 20 20.0026 11.0483 20 0.00478516C19.9974 11.0483 11.0441 20 0 20ZM20 40C20 28.9542 28.9544 20 40 20V40H20ZM20 40C20 28.9542 11.0457 20 0 20V40H20Z"
                    fill="#0A0C00"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_589_6150">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="font-secondary text-2xl font-bold  mb-4">
            Digital Marketing
          </h3>
          <p className="text-gray-700  mb-6">
            We care success relationships fuel real success. We love building
            brands and helping.
          </p>
          <div className="">
            <Link
              href="#"
              className="text-primary font-semibold underline hover:no-underline"
            >
              View Details &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        <Link href={"/services"}>View More</Link>
      </div>
    </div>
  );
};

ServiceSection.displayName = "ServiceSection";
export { ServiceSection };

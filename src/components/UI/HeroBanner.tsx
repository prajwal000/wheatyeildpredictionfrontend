import React from "react";
import { Montserrat } from "next/font/google";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

const HeroBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[95vh]">
      <div className="bg-[#F2ECDB] flex flex-col items-center justify-center relative w-full">
        <img
          src="/grain-flipped.webp"
          alt="grain"
          width="300px"
          className="absolute top-[0px] right-[50px]"
        />
        <div className="w-[500px] ">
          <h1
            className={`text-[4rem] tracking-[-2.72px] leading-[4.5rem] font-[500] ${montserrat.className}`}
          >
            Ancient
            <br /> Wheat,
            <br /> Studied with
            <br /> Innovation
          </h1>
          <p className="py-3">
            Transforming wheat production in Nepal by combining traditional
            agriculture with modern analytics. Our project empowers farmers and
            policymakers to improve yields and ensure food security for
            millions.
          </p>
          <div className="py-3 flex gap-4">
            <Link href="#about"><PrimaryButton name="Explore" /></Link>
            <SecondaryButton name="Study Data" />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-full object-cover h-full"
          src="https://bluebirdgrainfarms.com/wp-content/uploads/2024/02/Einkorn_Emmer-Field-scaled.jpg"
        />
        <div className="overlay-object bottom-[10%] absolute right-[5%]">
          <svg
            width="166"
            height="165"
            viewBox="0 0 166 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1415_19695)">
              <path
                d="M139.128 138.504C170.058 107.574 170.058 57.4259 139.128 26.4956C108.198 -4.43471 58.0498 -4.43472 27.1195 26.4956C-3.81081 57.4259 -3.81081 107.574 27.1195 138.504C58.0498 169.434 108.198 169.434 139.128 138.504Z"
                fill="white"
                stroke="#231F20"
                strokeWidth="6.5959"
              ></path>
              <path
                d="M154.405 82.4999C154.405 121.868 122.493 153.781 83.1244 153.781C43.7563 153.781 11.8438 121.868 11.8438 82.4999H154.405Z"
                fill="#808285"
              ></path>
              <mask
                id="mask0_1415_19695"
                maskUnits="userSpaceOnUse"
                x="11"
                y="82"
                width="144"
                height="72"
              >
                <path
                  d="M154.404 82.4998C154.404 121.868 122.492 153.78 83.1234 153.78C43.7553 153.78 11.8428 121.868 11.8428 82.4998H154.404Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_1415_19695)">
                <path
                  d="M154.404 82.4998H8.5293L14.4703 105.95L154.404 82.4998Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M154.405 82.4998L15.7744 109.361L27.7473 130.702L154.405 82.4998Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M154.403 82.4998L31.2285 133.152L53.0122 149.392L154.403 82.4998Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M154.405 82.4998L57.5234 150.941L87.9554 158.135L154.405 82.4998Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M154.403 82.4998L95.6826 155.193L151.772 154.788L154.403 82.4998Z"
                  fill="#231F20"
                ></path>
              </g>
              <path
                d="M40.6143 43.0106H47.8427V66.2558C47.8427 67.7326 48.2933 69.0086 50.3493 69.0086C52.2388 69.0086 52.8143 67.3653 52.8143 66.0514V43.0143H60.0427V65.313C60.0427 70.527 57.7027 74.552 50.3115 74.552C44.1925 74.552 40.6218 71.6364 40.6218 65.313V43.0143L40.6143 43.0106Z"
                fill="#231F20"
              ></path>
              <path
                d="M69.0737 63.5031V65.6803C69.0737 67.4448 69.6492 69.0048 71.9476 69.0048C73.6288 69.0048 74.371 67.4827 74.371 65.9264C74.371 63.3402 72.2354 62.352 70.3459 61.2047C68.127 59.9324 66.2414 58.7434 64.8858 57.1834C63.5719 55.6234 62.7919 53.7339 62.7919 51.0228C62.7919 45.2332 66.283 42.276 71.8681 42.276C78.1537 42.276 81.3532 46.4639 81.0276 52.2534H74.3747C74.2952 50.4472 74.3747 47.9822 71.993 47.8194C70.5163 47.6945 69.653 48.5161 69.4902 49.8717C69.2857 51.7195 70.2285 52.6623 71.6674 53.6506C74.3785 55.3735 76.7186 56.4413 78.4036 58.0051C80.0886 59.5651 81.073 61.6174 81.073 65.3547C81.073 71.2692 77.7864 74.552 71.7924 74.552C65.1811 74.552 62.3867 70.8564 62.3867 66.7897V63.5031H69.0812H69.0737Z"
                fill="#231F20"
              ></path>
              <path
                d="M91.3749 48.5539C94.9077 48.6372 96.0966 48.8416 96.1383 52.4539V62.5147C96.2632 66.6192 96.2178 68.592 91.3749 68.2625V48.5501V48.5539ZM93.8778 73.8097C96.0966 73.8097 98.395 73.6053 100.285 72.3709C102.378 71.057 103.325 68.8002 103.363 65.718V52.045C103.363 49.0878 102.912 46.0889 100.118 44.4455C97.7778 43.09 94.6161 43.0104 91.9883 43.0104H84.1465V73.8097H93.8778Z"
                fill="#231F20"
              ></path>
              <path
                d="M118.556 62.3935H114.368L116.462 48.5955H116.546L118.556 62.3935ZM112.725 73.8097L113.588 67.8157H119.253L120.279 73.8097H127.587L120.892 43.0104H112.187L105.451 73.8097H112.721H112.725Z"
                fill="#231F20"
              ></path>
              <path
                d="M38.2547 107.979C38.2547 109.304 38.1297 111.273 36.3766 111.273C34.6234 111.273 34.4038 109.3 34.4038 107.979V98.4938C34.4038 97.0777 34.6196 95.3813 36.3463 95.3813C38.0729 95.3813 38.2547 97.0777 38.2547 98.4938V107.979ZM43.6769 98.1227C43.6769 93.6888 41.121 91.2238 36.3766 91.2238C31.6321 91.2238 28.9854 93.6888 28.9854 98.1227V107.517C28.9854 112.72 30.8937 115.435 36.3766 115.435C41.8594 115.435 43.6769 112.723 43.6769 107.517V98.1227Z"
                fill="white"
              ></path>
              <path
                d="M51.5891 95.9342C54.2397 95.8736 55.3794 95.9948 55.3794 98.7362C55.3794 100.152 55.0083 101.599 53.4407 101.599H51.5929V95.9304L51.5891 95.9342ZM51.5891 105.76H53.3763C54.6372 105.851 55.0689 106.779 55.2242 108.195C55.3794 109.611 55.2544 111.523 55.3491 113.553C55.3794 114.015 55.5006 114.446 55.6558 114.878H61.5665V114.568C61.3204 114.352 61.1689 114.075 61.044 113.765C60.7335 112.288 60.7032 108.312 60.5517 106.464C60.4609 104.863 59.3817 103.814 57.8709 103.477V103.416C60.1504 102.367 60.7335 100.614 60.7335 98.1493C60.7335 93.56 58.5184 91.7728 54.0806 91.7728H46.1631V114.874H51.5816V105.756L51.5891 105.76Z"
                fill="white"
              ></path>
              <path
                d="M74.0741 114.908L73.828 112.845H73.7674C72.658 114.814 71.4274 115.431 69.0873 115.431C64.4981 115.431 63.0176 112.258 63.0176 108.07V98.5848C63.0176 93.5639 65.3273 91.2239 70.2876 91.2239C74.9071 91.2239 77.6486 93.1929 77.6486 97.907V99.6337H72.2301V98.369C72.2301 96.3962 71.984 95.4117 70.5338 95.3814C68.8412 95.3511 68.4398 96.2751 68.4398 97.7859V109.213C68.4398 110.508 69.0229 111.277 70.4429 111.277C72.2907 111.277 72.3513 109.8 72.3513 108.32V106.502H70.4126V102.345H77.7735V114.912H74.0779L74.0741 114.908Z"
                fill="white"
              ></path>
              <path
                d="M89.2273 106.313H86.0883L87.6597 95.9646H87.7203L89.2311 106.313H89.2273ZM84.8539 114.878L85.5014 110.384H89.7536L90.5223 114.878H96.0013L90.9804 91.7767H84.4525L79.4014 114.878H84.8539Z"
                fill="white"
              ></path>
              <path
                d="M102.287 101.94L102.227 102L102.719 114.874H97.5732V91.7728H103.147L107.335 104.677H107.426L106.903 91.7728H112.049V114.874H106.506L102.287 101.94Z"
                fill="white"
              ></path>
              <path
                d="M114.944 114.878V91.7767H120.367V114.878H114.944Z"
                fill="white"
              ></path>
              <path
                d="M132.379 99.8457V98.369C132.379 96.3962 131.67 95.3814 130.652 95.3814C128.959 95.3511 128.558 96.2751 128.558 97.7859L128.528 109.213C128.528 110.508 129.05 111.277 130.466 111.277C132.314 111.277 132.469 109.369 132.469 107.949V105.855H137.888V108.687C137.888 112.659 135.608 115.431 130.065 115.431C125.074 115.431 123.136 112.78 123.136 108.07V98.5848C123.136 93.5639 125.446 91.2239 130.406 91.2239C135.025 91.2239 137.797 93.1929 137.797 97.907V99.8457H132.375H132.379Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1415_19695">
                <rect
                  width="165"
                  height="165"
                  fill="white"
                  transform="translate(0.624023 -0.00012207)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
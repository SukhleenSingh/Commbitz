
import React, { useState } from "react";
import { Search } from 'lucide-react';
import Asia from './ASIA.png';
import Africa from './Africa.png';
import SouthAmerica from './SouthAmerica.png';
import NorthAmerica from './NorthAmerica.png';
import Europe from './Europe.png';
import Globall from './Global.png';
import MiddleEast from './MiddleEast.png';
import Oceania from './Oceania.png';


const destinations = [
  { name: "China", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/9dc8ff49-81c8-45d3-9174-e6fc4c681aac.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/0389e3f5-9cf5-433d-87df-5a6357b145b2.png" },
  { name: "Europe", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/7d1902cc-07ee-445e-a205-7cee00b52c8c.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/3f8f4f1b-6175-4041-8b2b-f0ef740c8f3a.png" },
  { name: "Indonesia", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/afb58fdc-c9d9-444a-866f-cd7a10999d21.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/77180245-d3f7-449a-9110-373b92b71a93.png" },
  { name: "Japan", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/cf042bd4-1466-4301-a91b-3a33e1685815.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/0bb48c70-8a64-47cc-88ba-3dc924a89cee.png" },
  { name: "Malaysia", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/70da6a6e-c708-493d-a94e-d658b53a36c5.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/dd8e520b-2489-4ce6-a4da-e23f8d5652ab.png" },
  { name: "Philippines", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/530a5234-a4ae-40c9-be29-96a45485747d.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/0d830d98-6a6f-4d48-8988-f4e2994aa8ab.png" },
  { name: "Thailand", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c144ae02-064a-40b4-a120-2974b45ac0b7.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/2ea43459-a5f9-4ae8-a41e-ca7aabe9aad2.png" },
  { name: "UAE", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/0e0003b7-887e-4efd-8c75-301ecb168460.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c9fe12cf-5fed-4812-9b48-7d4053de0959.png" },
  { name: "United Kingdom", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/b4cd4b2e-838b-44c5-a615-8349b8b2e54d.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/39511549-ddf4-4000-8bda-37c434c56690.png" },
  { name: "United States", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/40f03aed-3f9c-4d1c-a731-0edbf4b8b6fc.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/43fa2671-aaab-46cc-84a6-5b1f8b92b03c.png" },
  { name: "Vietnam", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/177762a8-9fad-4c93-9b21-2f46791b6d03.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/25265fee-3f7e-4a63-a85c-ee35faecb7da.png" },
  { name: "Australia", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/b515dc6b-2e72-4072-b32e-810727d549b4.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/639bbc4f-e841-4ffb-9173-0b839a725931.png" },
];

const continents = [
  { name: "Asia", image: Asia },
  { name: "Europe", image: Europe },
  { name: "North America", image: NorthAmerica },
  { name: "South America", image: SouthAmerica },
  { name: "Africa", image: Africa },
  { name: "Oceania", image: Oceania },
  { name: "Middle East", image: MiddleEast },
  { name: "Global", image: Globall }
];

const DestinationCard = ({ name, flag, image }: { name: string; flag?: string; image: string }) => (
  <div className="bg-[#19272f] text-white p-4 rounded-xl shadow-md flex flex-col items-center mb-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#1e3a47] duration-300">
    {flag && <img src={flag} alt={`${name} flag`} className="w-10 h-10" />}
    <h4 className="mt-2 text-lg font-semibold">{name}</h4>
    {image && <img src={image} alt={`${name} image`} className="w-24 h-24 mt-2 rounded-lg" />}
  </div>
);

const EsimDestinations = () => {
  const [activeTab, setActiveTab] = useState("Popular Plans");

  const getDestinations = () => {
    if (activeTab === "Popular Plans") return destinations.slice(0, 6);
    if (activeTab === "Local eSIMs") return destinations.slice(0, 12);
    if (activeTab === "Regions") return continents.map(continent => ({ name: continent.name, image: continent.image }));
    return [];
  };

  return (
    <section className="p-6 bg-[#171717] pt-16">
      <div className="container mx-auto text-center">
        <h6 className="text-lg text-white">Connect Anywhere, Anytime – Your eSIM, Your Way</h6>
        <h3 className="text-5xl text-white font-semi-bold mt-2">International eSIM Destinations</h3>

        <div className="mt-4 flex justify-center items-center  bg-black  rounded-md shadow-md w-1/2 mx-auto  ">
          <Search className="w-5 h-5 text-gray-500 mx-2" />
          <div className="flex w-full ">
            <input
              type="text"
              placeholder="Search Destination"
              className="flex-1 p-2 rounded-l-md bg-black text-white"
            />
            <button className="px-4 py-2 bg-[#03fe9d] text-black rounded-r-md ">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">

        <div className="container mx-auto mt-8">
          <ul className="flex justify-center gap-4 pb-2">
            {["Popular Plans", "Local eSIMs", "Regions"].map(tab => (
              <li
                key={tab}
                className={`relative cursor-pointer px-4 py-2 rounded-md ${activeTab === tab ? 'bg-[#03fe9d] text-black font-bold' : 'bg-white text-black'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#03fe9d]"></span>
                )}
              </li>

            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {getDestinations().map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default EsimDestinations;

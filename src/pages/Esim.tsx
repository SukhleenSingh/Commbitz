
import React from 'react';
import Navbar from '../components/Navbar';
import  { useState } from "react";
import { Search } from 'lucide-react';
import Destinations from '@/components/Destinations';
import Footer from '@/components/Footer';


const destinations = [
  
  {
    name: "Aland Islands",
    flag: "	https://customsbuckets.s3.us-west-2.amazonaws.com/Country/5cee8d0d-5a29-4cd1-9176-c0fbe63b7b35.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/6548c254-11af-46b6-9678-820440f35e2a.png"
  },
  {
    name: "Albania",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/b5fa1bcf-c750-4313-8ce4-3c5950bb9cee.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/f0f2a3af-90d2-478b-9b82-fbd9ff54e0e4.png"
  },
  {
    name: "Andorra",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/46b6155d-2719-47bd-85a0-09c6325cec51.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/6a6913e4-bae7-4a8d-963d-a4b20bd65290.png"
  },
  {
    name: "Armenia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/f40a3bcf-49e0-4240-bc01-7173d0f98c92.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/9f294ad9-d42c-4c8b-a01a-dc6a7f48cba6.png"
  },
  {
    name: "Azerbaijan",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/e3efbfb5-fc2a-499f-aac3-40f155a09ab7.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/57ecf095-6d0b-4a31-869d-891096ac8f78.png"
  },
  {
    name: "Bahrain",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/dd2540a6-4508-4e45-b59e-833f8196f9b2.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/ad0faf06-2611-47df-8d7b-4378b6ed69ef.png"
  },
  {
    name: "Bangladesh",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/3b606464-1504-4495-a561-6b12d7acba24.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/15445f46-afb4-424c-8b30-1e9f84da9fe2.png"
  },
  {
    name: "Bolivia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/20906d2e-e005-4d69-b603-0e7e32b537a6.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/22a08a09-13d0-49ac-9986-4b44936f9e47.png"
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/848dac57-bc32-4589-ab45-e6c8783f9d9b.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/e6cf9631-749d-4727-8576-90e3e70ba312.png"
  },
  {
    name: "Botswana",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/21d91e16-178a-46bb-910e-903c4344baae.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/3b093f15-0e55-482a-9fa6-7f4c8c06809d.png"
  },
  {
    name: "Brazil",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/7954083c-214f-49e3-9b2b-053291c0fa03.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/dcebfee2-0d62-41bd-9917-03ade2bff2ee.png"
  },
  {
    name: "Bulgaria",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/92de076f-5ece-4941-946f-bfb0700faf9b.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/46c131d1-f126-4ddd-8908-077223d1c110.png"
  },
  {
    name: "China",
    flag: "https://flagpedia.net/data/flags/h80/cn.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/0389e3f5-9cf5-433d-87df-5a6357b145b2.png"
  },
  {
    name: "Philippines",
    flag: "https://flagpedia.net/data/flags/h80/ph.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/0d830d98-6a6f-4d48-8988-f4e2994aa8ab.png"
  },
  {
    name: "Thailand",
    flag: "https://flagpedia.net/data/flags/h80/th.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/2ea43459-a5f9-4ae8-a41e-ca7aabe9aad2.png"
  },
  {
    name: "UAE",
    flag: "https://flagpedia.net/data/flags/h80/ae.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c9fe12cf-5fed-4812-9b48-7d4053de0959.png"
  },
  {
    name: "United Kingdom",
    flag: "https://flagpedia.net/data/flags/h80/gb.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/39511549-ddf4-4000-8bda-37c434c56690.png"
  },
  {
    name: "United States",
    flag: "https://flagpedia.net/data/flags/h80/us.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/43fa2671-aaab-46cc-84a6-5b1f8b92b03c.png"
  },
  {
    name: "Vietnam",
    flag: "https://flagpedia.net/data/flags/h80/vn.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/25265fee-3f7e-4a63-a85c-ee35faecb7da.png"
  },
  {
    name: "Australia",
    flag: "https://flagpedia.net/data/flags/h80/au.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/639bbc4f-e841-4ffb-9173-0b839a725931.png"
  },
  { name: "Europe", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/7d1902cc-07ee-445e-a205-7cee00b52c8c.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/3f8f4f1b-6175-4041-8b2b-f0ef740c8f3a.png" },
  { name: "Philippines", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/530a5234-a4ae-40c9-be29-96a45485747d.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/0d830d98-6a6f-4d48-8988-f4e2994aa8ab.png" },
  { name: "Thailand", flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c144ae02-064a-40b4-a120-2974b45ac0b7.png", image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/2ea43459-a5f9-4ae8-a41e-ca7aabe9aad2.png" },

  {
    name: "Indonesia",
    flag: "https://flagpedia.net/data/flags/h80/id.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/77180245-d3f7-449a-9110-373b92b71a93.png"
  },
  
  {
    name: "Japan",
    flag: "https://flagpedia.net/data/flags/h80/jp.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/0bb48c70-8a64-47cc-88ba-3dc924a89cee.png"
  },
  {
    name: "Malaysia",
    flag: "https://flagpedia.net/data/flags/h80/my.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/dd8e520b-2489-4ce6-a4da-e23f8d5652ab.png"
  },
  {
    name: "Cambodia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/4273e242-eb42-43d8-a85f-00d30ba69470.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/d63cfa25-17b7-4cbb-b195-b6e64e8086ea.png"
  },
  {
    name: "Cameroon",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/1e7db5fc-7e4b-4a9f-8e29-e1fe4f014c45.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/82fe8b80-0b57-47d1-b4e4-a1440b8f52d2.png"
  },
  {
    name: "Canada",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/7959c361-30d4-4959-8526-2c68a607296b.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/03639ba4-0bf3-4e0b-90e0-3f8148126014.png"
  },
  {
    name: "Canary Islands",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/47f5b231-3131-4376-9887-f374a6d1ebc4.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/32280138-07f2-4a9e-a7e6-de23da7bf4b7.png"
  },
  {
    name: "Central African Republic",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/d83432e4-9064-451f-9657-fbf7adb2170e.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/8eada4c3-54ec-4986-9d7b-23eef540ed79.png"
  },
  {
    name: "Chad",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/07c0a0a0-de75-4f61-9f25-58f72718c0b7.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/79e23380-9ffa-4901-ae05-780a37e988c8.png"
  },
  {
    name: "Chile",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/b1d0afde-d4b9-4c12-be0d-3e183997d90c.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/3d2df597-fc5e-4e32-8e13-64152ac4bef5.png"
  },
  {
    name: "China",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/9dc8ff49-81c8-45d3-9174-e6fc4c681aac.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/0389e3f5-9cf5-433d-87df-5a6357b145b2.png"
  },
  {
    name: "Colombia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/7b816da5-4f63-413f-9c04-851f5fd0e173.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/613add4d-2d85-4a99-aec5-ca531c50cd27.png"
  },
  {
    name: "Congo",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/bae1f5e0-28c9-4b0a-a7ad-0e4699d1b13d.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/e76c23db-8c20-4209-bd61-b4225986d1d5.png"
  },
  {
    name: "Costa Rica",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/db832781-7616-4e8b-8c85-0eee4e3f1092.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/cc1111d1-622c-4729-9cfb-a166a2f8119c.png"
  },
  {
    name: "Croatia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/7b0006f8-ff17-4fc8-9d5c-c084f67e093a.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/a7e7723d-e0ed-4517-93a2-54a18b20023e.png"
  },
  {
    name: "Cyprus",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/3e3c8fb7-43f9-4195-95f1-57edce53ef91.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/ea01e972-ae26-41ee-b4bc-8ce3433f3f2f.png"
  },
  {
    name: "Czech Republic",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/24c1b0ae-5092-40cb-a742-2537ac76dcde.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/77ba9132-c380-4a20-ab97-0c299ec8ba93.png"
  },
  {
    name: "Denmark",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/ec1b25aa-958e-49a5-a2a9-11ec46686d98.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/03adfdc0-f899-4b3d-829b-67d5d67aba08.png"
  },
  {
    name: "Dominican Republic",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/4ca02d8c-6164-42e2-8d29-76bed4a56adc.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/d1ca959c-d379-43a1-bcc7-a5a5e1d729d7.png"
  },
  {
    name: "Ecuador",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/f477039a-78f0-403a-84af-f9351816c953.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/bee6cd4e-2559-4ec4-af64-031e8f538035.png"
  },
  {
    name: "Egypt",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/e356ca36-1dcd-4ed1-bc74-95f26a27713f.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/5acba035-e0ef-4cc5-ac87-4773b3631107.png"
  },
  {
    name: "El Salvador",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c7d8c07e-73c5-42c9-aa9c-02dc281d9900.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/2e209f8d-4f60-4ab1-972c-87eab30019c8.png"
  },
  {
    name: "Estonia",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/c86ef9d4-b28e-4623-832b-5f904f54abaf.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/3fbecc31-8fd2-4d3b-ac3a-2c355897e417.png"
  },
  {
    name: "Finland",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/1a0cc58b-739c-43af-8d67-6acd54f6c81d.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/46b536bc-a669-4ee7-8f50-7a3b1fc9454d.png"
  },
  {
    name: "France",
    flag: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/1500ada2-a58f-4777-aca3-eb10f9050cd7.png",
    image: "https://customsbuckets.s3.us-west-2.amazonaws.com/Country/d53f4b6e-afff-4b6d-871a-a14b8bf754c9.png"
  }
];


const DestinationCard = ({ name, flag, image }) => (
  <div className="bg-[#19272f] text-white p-4 rounded-xl shadow-md flex flex-col items-center mb-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#1e3a47] duration-300">
    {flag && <img src={flag} alt={`${name} flag`} className="w-10 h-10 rounded-full" />}
    <h4 className="mt-2 text-lg font-semibold">{name}</h4>
    {image && <img src={image} alt={`${name} image`} className="w-24 h-24 mt-2 rounded-lg" />}
  </div>
);


const Esim = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="p-6 bg-[#171717] pt-16">
            <div className="container mx-auto text-center">
              <h6 className="text-lg text-white">Connect Anywhere, Anytime – Your eSIM, Your Way</h6>
              <h3 className="text-5xl text-white font-semi-bold mt-2">International eSIM Destinations</h3>
      
              <div className="mt-4 flex justify-center items-center gap-2 bg-black p-2 rounded-md shadow-md w-1/2 mx-auto">
                <Search className="w-5 h-5 text-gray-500" />
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Search Destination"
                    className="flex-1 p-2 rounded-l-md bg-black text-white"
                  />
                  <button className="px-4 py-2 bg-[#03fe9d] text-black rounded-r-md h-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="container mx-auto text-center">
      
              
            </div>
            <div className="container mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} />
              ))}
            </div>
          </section>
      <Footer/>
    </div>
  );
};

export default Esim;

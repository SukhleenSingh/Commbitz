import React from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function Reviews() {
  const reviews = [
    {
      rating: 5,
      text: "I've been using the eSIM service for a few months now and I'm extremely satisfied with the performance. Switching to the eSIM was hassle-free, and I never have to worry about changing physical SIM cards when I travel. Connectivity is fast and reliable, even in remote areas. Highly recommend!",
      name: "John Wilson, Melbourne",
      platform: "Google",
      icon: <FaGoogle className="text-blue-500 text-xl" />,
    },
    {
      rating: 5,
      text: "I love traveling, but I hate dealing with SIM cards and roaming charges. That's why I use Commitz to get an eSIM whenever I go abroad. It's fast, easy, and secure. I can pay in my local currency and get connected in no time.",
      name: "Emily Jackson, Berlin",
      platform: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-xl" />,
    },
    {
      rating: 5,
      text: "The eSIM service has made my international travel so much easier. I simply activated the eSIM on my phone, and I was ready to go in minutes. No need for roaming charges or finding local SIM cards. I’ve had great service in multiple countries, and the data speeds have been consistently excellent.",
      name: "Jack Rogers, Sydney",
      platform: "Twitter",
      icon: <FaTwitter className="text-blue-400 text-xl" />,
    },
    {
      rating: 5,
      text: "As someone who travels frequently, the eSIM has been a game-changer. I no longer have to hunt for local SIM cards or worry about compatibility issues. The eSIM worked seamlessly in every country I visited, and the data speeds were impressive. I'm a loyal customer now!",
      name: "Brandon Lee, Vancouver",
      platform: "Google",
      icon: <FaGoogle className="text-blue-500 text-xl" />,
    },
  ];

  return (
    <div className="bg-[#19272f] text-white px-10 py-16">
      <h4 className="text-lg text-gray-400 mb-2">Reviews</h4>
      <h2 className="text-4xl font-bold mb-10">Explore Commitz: See What Users Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg text-black flex flex-col h-full"
            style={{ background: "linear-gradient(#fbfffe, #03fe9d)" }}
          >
            {/* Star Rating */}
            <div className="flex mb-2 text-yellow-400">
              {"⭐".repeat(review.rating)}
            </div>

            {/* Review Text */}
            <p className="text-sm mb-4">{review.text}</p>

            {/* Spacer to push name and icon to bottom */}
            <div className="mt-auto flex flex-col justify-between ">
              {/* Reviewer Name */}
              <p className="font-semibold">{review.name}</p>

              {/* Platform Icon */}
              <div className="flex items-center">
                {review.icon}
                <p className="ml-2 text-sm">{review.platform}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

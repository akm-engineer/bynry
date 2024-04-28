import React, { useState } from "react";

export const UserCard = ({
  name,
  location,
  email,
  interests,
  phone,
  imgSrc,
  mapSrc,
}) => {
  const [showMap, setShowMap] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-[350px] rounded-xl bg-white border border-gray-500 font-signature">
      <div className="flex items-center justify-center gap-4 py-2">
        <img
          src={imgSrc}
          alt={name}
          className="size-20 rounded-full border border-gray-400"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleMap}
        >
          Summary
        </button>
      </div>
      {showMap && (
        <div className="px-6 py-4">
          <iframe
            src={mapSrc}
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg border border-gray-300"
          ></iframe>
        </div>
      )}
      <div className="px-6 py-4">
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p>
      </div>
      {showDetails && (
        <div className="flex flex-col px-6 justify-center py-2 ">
          <div className="flex  gap-3 my-1 text-gray-600">
            <strong className="text-blue-400">Location:</strong>
            {location}
          </div>
          <div className="flex  gap-3 my-1 text-gray-600">
            <strong className="text-blue-400">Email:</strong>
            {email}
          </div>
          <div className="flex  gap-3 my-1 text-gray-600">
            <strong className="text-blue-400">Interests:</strong>
            {interests}
          </div>
          <div className="flex  gap-3 my-1 text-gray-600">
            <strong className="text-blue-400">Phone:</strong>
            {phone}
          </div>
        </div>
      )}
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={toggleDetails}
        >
          {showDetails ? "Hide Details" : "Read More"}
        </button>
      </div>
    </div>
  );
};

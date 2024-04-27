/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import ProfileDetails from "./ProfileDetails";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
    setShowDetails(false); // Hide details when map is shown
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${profile.phone}`;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto m-2 bg-white border-red-500 border">
      <div className="flex items-center justify-center py-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={profile.image}
          alt="Profile"
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
            src={profile.mapSrc}
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
        <div className="font-bold text-xl mb-2">{profile.name}</div>
        <p className="text-gray-700 text-base">{profile.bio}</p>
      </div>
      {showDetails && (
        <ProfileDetails
          details={profile}
          onEmailClick={handleEmailClick}
          onPhoneClick={handlePhoneClick}
        />
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
export default ProfileCard;

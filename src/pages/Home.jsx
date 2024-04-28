import React, { useState } from "react";
import { UserCard } from "../components/ProfileCard";
import Navbar from "../components/Navbar";
import profiles from "../utils/profilesData";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profiles.filter((profile) => {
    return (
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.interests.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      {" "}
      <Navbar onSearchChange={handleSearchChange} />
      <div className="">
        <div className="p-6 flex gap-6 flex-wrap items-center justify-center">
          {filteredProfiles.map((profile, index) => (
            <UserCard
              key={index}
              profile={profile}
              name={profile.name}
              location={profile.location}
              email={profile.email}
              interests={profile.interests}
              phone={profile.phone}
              imgSrc={profile.imgSrc}
              mapSrc={profile.mapSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

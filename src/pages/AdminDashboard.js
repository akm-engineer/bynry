import React, { useState } from "react";
import { FaHome } from "react-icons/fa"; // Importing the home icon
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import profiles from "../utils/profilesData";

const AdminDashboard = () => {
  const [profileData, setProfileData] = useState(profiles);
  const [editingProfile, setEditingProfile] = useState(null);
  const [editedProfile, setEditedProfile] = useState(null);
  const [expandedProfile, setExpandedProfile] = useState(null);
  const navigate = useNavigate(); // Access the navigate function for redirection

  // Function to delete a profile
  const deleteProfile = (id) => {
    const updatedProfiles = profileData.filter((profile) => profile.id !== id);
    setProfileData(updatedProfiles);
  };

  // Function to edit a profile
  const editProfile = (profile) => {
    setEditingProfile(profile);
    setEditedProfile({ ...profile });
  };

  // Function to save edited profile with validation
  const saveEditedProfile = () => {
    // Check if any of the fields are empty
    if (
      editedProfile.name.trim() === "" ||
      editedProfile.email.trim() === "" ||
      editedProfile.location.trim() === "" ||
      editedProfile.phone.trim() === "" ||
      editedProfile.interest.trim() === ""
    ) {
      alert("Please fill in all fields before saving.");
      return;
    }

    const updatedProfiles = profileData.map((profile) =>
      profile.id === editingProfile.id ? editedProfile : profile
    );
    setProfileData(updatedProfiles);
    setEditingProfile(null);
  };

  // Function to toggle display of profile details
  const toggleProfile = (id) => {
    setExpandedProfile(expandedProfile === id ? null : id);
  };

  // Function to redirect to the home page
  const goToHomePage = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="container mx-auto mt-8 font-signature">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold ml-4 md:ml-0">Admin Dashboard</h1>
        <FaHome
          className="text-2xl cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={goToHomePage}
        />
      </div>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Email</th>
            <th className="p-2 border border-gray-400">Location</th>
            <th className="p-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((profile) => (
            <React.Fragment key={profile.id}>
              <tr>
                <td
                  className="p-2 border border-gray-400 cursor-pointer"
                  onClick={() => toggleProfile(profile.id)}
                >
                  <h1 className="text-blue-500 font-semibold hover:text-blue-700 duration-300">
                    {profile.name}
                  </h1>
                </td>
                <td className="p-2 border border-gray-400">{profile.email}</td>
                <td className="p-2 border border-gray-400">
                  {profile.location}
                </td>
                <td className="p-2 border border-gray-400">
                  <div className="flex justify-center items-center flex-col gap-2 md:flex-row">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => editProfile(profile)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => deleteProfile(profile.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {expandedProfile === profile.id && (
                <tr>
                  <td colSpan="4" className="p-2 border border-gray-400">
                    <div className="p-4 ">
                      <strong className="text-blue-400">Bio:</strong>{" "}
                      {profile.bio}
                      <br />
                      <strong className="text-blue-400">Email:</strong>{" "}
                      {profile.email}
                      <br />
                      <strong className="text-blue-400">Phone:</strong>{" "}
                      {profile.phone}
                      <br />
                      <strong className="text-blue-400">Interest:</strong>{" "}
                      {profile.interests}
                      <br />
                      <iframe
                        className="w-full h-64 mt-4"
                        title="map"
                        src={profile.mapSrc}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Edit Profile Form */}
      {editingProfile && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <input
              type="text"
              placeholder="Name"
              value={editedProfile.name}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, name: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              value={editedProfile.email}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, email: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              value={editedProfile.location}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, location: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={editedProfile.phone}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, phone: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Interests"
              value={editedProfile.interest}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, interest: e.target.value })
              }
              className="block w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 "
                onClick={saveEditedProfile}
              >
                Save
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditingProfile(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

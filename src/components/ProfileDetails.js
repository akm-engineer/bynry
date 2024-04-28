import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const ProfileDetails = ({ details, onEmailClick, onPhoneClick }) => {
  return (
    <div className="px-6 py-4">
      <div className="mb-2 flex items-center">
        <IoLocationSharp className="mr-2" />
        <div>
          <strong>Location:</strong> {details.location}
        </div>
      </div>
      <div className="mb-2 flex items-center">
        <FiHeart className="mr-2" />
        <div>
          <strong>Interest:</strong> {details.interest}
        </div>
      </div>
      <div className="mb-2 flex items-center" onClick={onEmailClick}>
        <FaEnvelope className="mr-2 cursor-pointer" />
        <div>
          <strong>Email:</strong> {details.email}
        </div>
      </div>
      <div className="flex items-center" onClick={onPhoneClick}>
        <FaPhone className="mr-2 cursor-pointer" />
        <div>
          <strong>Phone:</strong> {details.phone}
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;

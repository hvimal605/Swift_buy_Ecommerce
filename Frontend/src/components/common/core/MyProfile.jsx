import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return "Add Date Of Birth";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  return (
    <>
      <h1 className="mb-8 md:mb-14 text-3xl text-center md:text-4xl font-bold text-pink-600">
        My Profile
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between rounded-lg border-[1px] border-pink-300 bg-white shadow-lg p-6 md:p-8 md:px-12">
        <div className="flex items-center gap-x-6 mb-6 md:mb-0">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[100px] h-[100px] rounded-full object-cover border-4 border-pink-300 shadow-md"
          />
          <div className="space-y-2">
            <p className="text-xl font-semibold text-pink-700">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-base text-gray-600">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard/settings")}
          className="text-pink-600 flex items-center gap-x-2 text-lg font-medium hover:text-pink-800 transition-colors duration-300"
        >
          <RiEditBoxLine className="text-xl" />
          Edit
        </button>
      </div>

      {/* Section 2 */}
      <div className="my-8 md:my-12 flex flex-col gap-y-6 md:gap-y-12 rounded-lg border-[1px] border-pink-300 bg-white shadow-lg p-6 md:p-8 md:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-semibold text-pink-700">About</p>
          <button
            onClick={() => navigate("/dashboard/settings")}
            className="text-pink-600 flex items-center gap-x-2 text-lg font-medium hover:text-pink-800 transition-colors duration-300"
          >
            <RiEditBoxLine className="text-xl" />
            Edit
          </button>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-gray-800"
              : "text-gray-500"
          } text-base font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Section 3 */}
      <div className="my-8 md:my-12 flex flex-col gap-y-6 md:gap-y-12 rounded-lg border-[1px] border-pink-300 bg-white shadow-lg p-6 md:p-8 md:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-xl font-semibold text-pink-700">
            Personal Details
          </p>
          <button
            onClick={() => navigate("/dashboard/settings")}
            className="text-pink-600 flex items-center gap-x-2 text-lg font-medium hover:text-pink-800 transition-colors duration-300"
          >
            <RiEditBoxLine className="text-xl" />
            Edit
          </button>
        </div>
        <div className="flex flex-col md:flex-row max-w-full md:max-w-[600px] justify-between">
          <div className="flex flex-col gap-y-6 w-full md:w-1/2">
            <div>
              <p className="mb-2 text-sm text-gray-500">First Name</p>
              <p className="text-base font-medium text-gray-800">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-500">Email</p>
              <p className="text-base font-medium text-gray-800">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-500">Gender</p>
              <p className="text-base font-medium text-gray-800">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 w-full md:w-1/2">
            <div>
              <p className="mb-2 text-sm text-gray-500">Last Name</p>
              <p className="text-base font-medium text-gray-800">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-500">Phone Number</p>
              <p className="text-base font-medium text-gray-800">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-gray-500">Date Of Birth</p>
              <p className="text-base font-medium text-gray-800">
                {formatDate(user?.additionalDetails?.dateOfBirth)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

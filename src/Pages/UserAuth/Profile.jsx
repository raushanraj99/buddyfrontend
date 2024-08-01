import React, { useContext } from "react";
import { context } from "../../main";
import Loader from "../../Component/Loader";


function Profile() {
  const { userdata, loading } = useContext(context);

  return (
    <div>
      <p className="text-3xl text-[green] font-bold">user profile</p>
        {loading ? (
          <Loader />
        ) : (
          <div>
            Name : <span>{userdata?.name}</span> <br />
            User Id : <span>{userdata?._id}</span> <br />
            Email : <span>{userdata?.email}</span>
          </div> 
        )}
        <br />
        Reset Password : 
        <a
          href={`/resetpassword/${userdata?._id}`}
          className="w-72 border text-white tracking-wider bg-[#3898b2] p-2 font-sans"
          type="submit"
        >
          Reset
        </a>

      <br />



      <div class="bg-white overflow-hidden shadow rounded-lg border mx-4 box">
        <div class="px-4 py-5 sm:px-6">
            <div class="flex justify-between items-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Contact Details
                </h3>
                
            </div>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                The contact information is provided below.
            </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        John Doe
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        johndoe@example.com
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        (123) 456-7890
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Contact Type
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Employee
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Company
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        BoxPower
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Job Title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Project Engineer
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Department
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Civil & Electrical
                    </dd>
                </div>
            </dl>
        </div>
    </div>














    </div>
  );
}

export default Profile;

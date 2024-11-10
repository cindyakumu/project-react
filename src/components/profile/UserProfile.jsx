import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <p className="text-gray-900">{user?.name}</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="text-gray-900">{user?.email}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Incident Reports</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-600">No incident reports available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
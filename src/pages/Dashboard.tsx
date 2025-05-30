import React, { useState } from 'react';

interface UserProfile {
  houseId: string;
  residentName: string;
  role: string;
  moveInDate: string;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<UserProfile>({
    houseId: '25B-Maple Street',
    residentName: 'Swetha G',
    role: 'Resident',
    moveInDate: '2025-05-10',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically update the profile in your backend
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Personal Dashboard</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        {!isEditing ? (
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500">House ID</h2>
              <p className="mt-1 text-lg text-gray-900">{profile.houseId}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">Resident Name</h2>
              <p className="mt-1 text-lg text-gray-900">{profile.residentName}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">Role</h2>
              <p className="mt-1 text-lg text-gray-900">{profile.role}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-500">Move-in Date</h2>
              <p className="mt-1 text-lg text-gray-900">
                {new Date(profile.moveInDate).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="houseId" className="block text-sm font-medium text-gray-700">
                House ID
              </label>
              <input
                type="text"
                name="houseId"
                id="houseId"
                value={profile.houseId}
                onChange={(e) => setProfile({ ...profile, houseId: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residentName" className="block text-sm font-medium text-gray-700">
                Resident Name
              </label>
              <input
                type="text"
                name="residentName"
                id="residentName"
                value={profile.residentName}
                onChange={(e) => setProfile({ ...profile, residentName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Resident</option>
                <option>Admin</option>
                <option>Moderator</option>
              </select>
            </div>
            <div>
              <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700">
                Move-in Date
              </label>
              <input
                type="date"
                name="moveInDate"
                id="moveInDate"
                value={profile.moveInDate}
                onChange={(e) => setProfile({ ...profile, moveInDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
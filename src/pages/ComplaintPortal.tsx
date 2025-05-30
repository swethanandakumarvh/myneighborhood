import React, { useState } from 'react';
import { format } from 'date-fns';

interface Complaint {
  id: string;
  type: string;
  description: string;
  status: 'Pending' | 'Assigned' | 'Resolved';
  filedOn: string;
  updatedOn?: string;
}

const initialComplaints: Complaint[] = [
  {
    id: '1',
    type: 'Water Supply',
    description: 'No water after 10 PM in Block B',
    status: 'Resolved',
    filedOn: '2025-05-25',
    updatedOn: '2025-05-26'
  },
  {
    id: '2',
    type: 'Garbage Collection',
    description: 'Overflowing bins near main gate',
    status: 'Assigned',
    filedOn: '2025-05-28'
  }
];

export default function ComplaintPortal() {
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComplaint, setNewComplaint] = useState<Partial<Complaint>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const complaint: Complaint = {
      id: Date.now().toString(),
      type: newComplaint.type || '',
      description: newComplaint.description || '',
      status: 'Pending',
      filedOn: new Date().toISOString().split('T')[0]
    };
    setComplaints([...complaints, complaint]);
    setIsModalOpen(false);
    setNewComplaint({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Complaint Portal</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Raise New Complaint
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {complaints.map((complaint) => (
            <li key={complaint.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-indigo-600 truncate">{complaint.type}</p>
                    <div className="ml-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        complaint.status === 'Resolved'
                          ? 'bg-green-100 text-green-800'
                          : complaint.status === 'Assigned'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {complaint.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Filed on {format(new Date(complaint.filedOn), 'PP')}
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{complaint.description}</p>
                </div>
                {complaint.updatedOn && (
                  <div className="mt-2 text-sm text-gray-500">
                    Updated on {format(new Date(complaint.updatedOn), 'PP')}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Raise New Complaint</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Complaint Type</label>
                <select
                  value={newComplaint.type || ''}
                  onChange={(e) => setNewComplaint({ ...newComplaint, type: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select type</option>
                  <option value="Water Supply">Water Supply</option>
                  <option value="Garbage Collection">Garbage Collection</option>
                  <option value="Streetlight">Streetlight</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newComplaint.description || ''}
                  onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
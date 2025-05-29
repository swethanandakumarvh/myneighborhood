import { useState } from 'react';

interface Business {
  id: string;
  businessName: string;
  ownerName: string;
  category: string;
  contact: string;
  description: string;
  logoUrl?: string;
}

const initialBusinesses: Business[] = [
  {
    id: '1',
    businessName: 'SweetTreats Bakery',
    ownerName: 'Mrs. Kavitha',
    category: 'Food',
    contact: '9876543210',
    description: 'Fresh cupcakes, cookies, and homemade cakes.',
  },
  {
    id: '2',
    businessName: 'Crafts & Decor',
    ownerName: 'Aarti Mehta',
    category: 'Art',
    contact: '9998887776',
    description: 'Handmade home décor and wall hangings.',
  },
];

export default function BusinessListings() {
  const [businesses, setBusinesses] = useState<Business[]>(initialBusinesses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBusiness, setNewBusiness] = useState<Partial<Business>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const business: Business = {
      id: Date.now().toString(),
      businessName: newBusiness.businessName || '',
      ownerName: newBusiness.ownerName || '',
      category: newBusiness.category || '',
      contact: newBusiness.contact || '',
      description: newBusiness.description || '',
      logoUrl: newBusiness.logoUrl,
    };
    setBusinesses([...businesses, business]);
    setIsModalOpen(false);
    setNewBusiness({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Local Business Listings</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Post Your Business
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{business.businessName}</h3>
              <p className="mt-1 text-sm text-gray-500">{business.category}</p>
              <p className="mt-3 text-sm text-gray-700">{business.description}</p>
              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Owner</dt>
                  <dd className="text-sm text-gray-900">{business.ownerName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="text-sm text-gray-900">{business.contact}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Post Your Business</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input
                  type="text"
                  value={newBusiness.businessName || ''}
                  onChange={(e) =>
                    setNewBusiness({ ...newBusiness, businessName: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                <input
                  type="text"
                  value={newBusiness.ownerName || ''}
                  onChange={(e) =>
                    setNewBusiness({ ...newBusiness, ownerName: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newBusiness.category || ''}
                  onChange={(e) =>
                    setNewBusiness({ ...newBusiness, category: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select a category</option>
                  <option value="Food">Food</option>
                  <option value="Art">Art</option>
                  <option value="Services">Services</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Info</label>
                <input
                  type="text"
                  value={newBusiness.contact || ''}
                  onChange={(e) =>
                    setNewBusiness({ ...newBusiness, contact: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newBusiness.description || ''}
                  onChange={(e) =>
                    setNewBusiness({ ...newBusiness, description: e.target.value })
                  }
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
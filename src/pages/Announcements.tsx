import { useState } from 'react';
import { format } from 'date-fns';

interface Announcement {
  id: string;
  title: string;
  content: string;
  postedBy: string;
  postedOn: string;
  targetGroup: string;
}

const initialAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Water Tank Maintenance',
    content: 'No water from 6 AM–9 AM on 27th May. Kindly store water in advance.',
    postedBy: 'Admin – GreenVal',
    postedOn: '2025-05-26',
    targetGroup: 'All'
  },
  {
    id: '2',
    title: 'Summer Fest Invitation',
    content: 'Join us for food, games & music! Entry at Clubhouse from 5 PM.',
    postedBy: 'Committee Head',
    postedOn: '2025-05-25',
    targetGroup: 'All'
  }
];

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({});
  const isAdmin = true; // In a real app, this would come from auth context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const announcement: Announcement = {
      id: Date.now().toString(),
      title: newAnnouncement.title || '',
      content: newAnnouncement.content || '',
      postedBy: 'Admin', // In a real app, this would come from auth context
      postedOn: new Date().toISOString().split('T')[0],
      targetGroup: newAnnouncement.targetGroup || 'All'
    };
    setAnnouncements([announcement, ...announcements]);
    setIsModalOpen(false);
    setNewAnnouncement({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        {isAdmin && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Post Announcement
          </button>
        )}
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {announcement.title}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Posted by {announcement.postedBy} on{' '}
                {format(new Date(announcement.postedOn), 'PP')}
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-500">{announcement.content}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {announcement.targetGroup}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Post Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newAnnouncement.title || ''}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={newAnnouncement.content || ''}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Target Group</label>
                <select
                  value={newAnnouncement.targetGroup || ''}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, targetGroup: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="All">All</option>
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                  <option value="Block C">Block C</option>
                </select>
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
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
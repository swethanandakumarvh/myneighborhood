import { useState } from 'react';
import { format } from 'date-fns';

interface Thread {
  id: string;
  title: string;
  category: string;
  content: string;
  startedBy: string;
  startedOn: string;
  lastResponseBy?: string;
  activeUsers: number;
  isSolved: boolean;
}

const initialThreads: Thread[] = [
  {
    id: '1',
    title: 'Best milk delivery service?',
    category: 'Recommendation',
    content: 'Looking for reliable milk delivery service in our area. Any suggestions?',
    startedBy: 'Suresh R',
    startedOn: '2025-05-26',
    lastResponseBy: 'Swetha G',
    activeUsers: 9,
    isSolved: false
  },
  {
    id: '2',
    title: 'House Cleaning Service',
    category: 'Help',
    content: 'Need recommendations for weekly house cleaning service.',
    startedBy: 'Pooja K',
    startedOn: '2025-05-25',
    lastResponseBy: 'Admin',
    activeUsers: 7,
    isSolved: true
  }
];

export default function HelpThreads() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newThread, setNewThread] = useState<Partial<Thread>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const thread: Thread = {
      id: Date.now().toString(),
      title: newThread.title || '',
      category: newThread.category || '',
      content: newThread.content || '',
      startedBy: 'Current User', // In a real app, this would come from auth context
      startedOn: new Date().toISOString().split('T')[0],
      activeUsers: 1,
      isSolved: false
    };
    setThreads([thread, ...threads]);
    setIsModalOpen(false);
    setNewThread({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Help Threads</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Start New Thread
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {threads.map((thread) => (
            <li key={thread.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-indigo-600 truncate">{thread.title}</p>
                    {thread.isSolved && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Solved
                      </span>
                    )}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {thread.category}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Started by {thread.startedBy}
                    </p>
                    {thread.lastResponseBy && (
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        Last response by {thread.lastResponseBy}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {thread.activeUsers} active users • Started{' '}
                      {format(new Date(thread.startedOn), 'PP')}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{thread.content}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => {
                      setThreads(
                        threads.map((t) =>
                          t.id === thread.id ? { ...t, isSolved: !t.isSolved } : t
                        )
                      );
                    }}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    {thread.isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Start New Thread</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newThread.title || ''}
                  onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newThread.category || ''}
                  onChange={(e) => setNewThread({ ...newThread, category: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select a category</option>
                  <option value="Help">Help</option>
                  <option value="Recommendation">Recommendation</option>
                  <option value="Discussion">Discussion</option>
                  <option value="Misc">Misc</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={newThread.content || ''}
                  onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
                  rows={4}
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
                  Create Thread
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
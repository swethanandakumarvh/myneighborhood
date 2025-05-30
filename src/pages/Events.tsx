import React, { useState } from 'react';
import { format } from 'date-fns';

interface Event {
  id: string;
  eventName: string;
  dateTime: string;
  hostName: string;
  location: string;
  description: string;
  rsvpCount: number;
}

const initialEvents: Event[] = [
  {
    id: '1',
    eventName: 'Summer Cleaning Drive',
    dateTime: '2025-06-02T09:00',
    hostName: 'Association Team',
    location: 'Block A Park',
    description: 'Community cleaning initiative. Bring your own gloves!',
    rsvpCount: 34
  },
  {
    id: '2',
    eventName: 'Yoga & Wellness Meetup',
    dateTime: '2025-06-05T07:00',
    hostName: 'Mrs. Rekha',
    location: 'Community Hall',
    description: 'Morning yoga session for all age groups.',
    rsvpCount: 20
  }
];

export default function Events() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = {
      id: Date.now().toString(),
      eventName: newEvent.eventName || '',
      dateTime: newEvent.dateTime || new Date().toISOString(),
      hostName: newEvent.hostName || '',
      location: newEvent.location || '',
      description: newEvent.description || '',
      rsvpCount: 0
    };
    setEvents([...events, event]);
    setIsModalOpen(false);
    setNewEvent({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Events</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Post New Event
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">{event.eventName}</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {format(new Date(event.dateTime), '
PPpp')}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Host</dt>
                  <dd className="mt-1 text-sm text-gray-900">{event.hostName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Location</dt>
                  <dd className="mt-1 text-sm text-gray-900">{event.location}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="mt-1 text-sm text-gray-900">{event.description}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">RSVPs</dt>
                  <dd className="mt-1 text-sm text-gray-900">{event.rsvpCount} attending</dd>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    setEvents(
                      events.map((e) =>
                        e.id === event.id ? { ...e, rsvpCount: e.rsvpCount + 1 } : e
                      )
                    );
                  }}
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Post New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Name</label>
                <input
                  type="text"
                  value={newEvent.eventName || ''}
                  onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date & Time</label>
                <input
                  type="datetime-local"
                  value={newEvent.dateTime || ''}
                  onChange={(e) => setNewEvent({ ...newEvent, dateTime: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Host Name</label>
                <input
                  type="text"
                  value={newEvent.hostName || ''}
                  onChange={(e) => setNewEvent({ ...newEvent, hostName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={newEvent.location || ''}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newEvent.description || ''}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
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
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
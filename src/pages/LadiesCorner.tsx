import React, { useState } from 'react';
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  topic: string;
  content: string;
  postedBy: string;
  postedOn: string;
  commentCount: number;
  likes: number;
}

const initialPosts: Post[] = [
  {
    id: '1',
    title: 'Easy Lunchbox Ideas',
    topic: 'Recipes',
    content: 'Here are some quick and healthy lunchbox ideas for kids...',
    postedBy: 'Swetha G',
    postedOn: '2025-05-26',
    commentCount: 4,
    likes: 12
  },
  {
    id: '2',
    title: 'Need help for babysit',
    topic: 'Parenting',
    content: 'Looking for reliable babysitter recommendations in Block C...',
    postedBy: 'Anjali R',
    postedOn: '2025-05-25',
    commentCount: 2,
    likes: 5
  }
];

export default function LadiesCorner() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<Partial<Post>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: Post = {
      id: Date.now().toString(),
      title: newPost.title || '',
      topic: newPost.topic || '',
      content: newPost.content || '',
      postedBy: 'Current User', // In a real app, this would come from auth context
      postedOn: new Date().toISOString().split('T')[0],
      commentCount: 0,
      likes: 0
    };
    setPosts([post, ...posts]);
    setIsModalOpen(false);
    setNewPost({});
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ladies' Corner</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Post
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Posted by {post.postedBy} on {format(new Date(post.postedOn), 'PP')}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  {post.topic}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-500">{post.content}</p>
              <div className="mt-4 flex items-center space-x-4">
                <button
                  onClick={() => {
                    setPosts(
                      posts.map((p) =>
                        p.id === post.id ? { ...p, likes: p.likes + 1 } : p
                      )
                    );
                  }}
                  className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                >
                  <span className="mr-1">❤️</span>
                  {post.likes} likes
                </button>
                <span className="text-sm text-gray-500">
                  💬 {post.commentCount} comments
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newPost.title || ''}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Topic</label>
                <select
                  value={newPost.topic || ''}
                  onChange={(e) => setNewPost({ ...newPost, topic: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select a topic</option>
                  <option value="Recipes">Recipes</option>
                  <option value="Parenting">Parenting</option>
                  <option value="Social">Social</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={newPost.content || ''}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
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
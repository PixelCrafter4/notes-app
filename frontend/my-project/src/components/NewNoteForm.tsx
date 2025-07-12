import React, { useState } from 'react';
import api from '../api/notesApi';

const NewNoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/', { title, content });
      setTitle('');
      setContent('');
      window.location.reload(); // simple refresh to get new note (better: call fetchNotes, but this works for now)
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white rounded p-4 shadow">
      <input
        className="border p-2 w-full mb-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="border p-2 w-full mb-2 rounded"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
};

export default NewNoteForm;

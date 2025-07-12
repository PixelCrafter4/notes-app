import React, { useState } from 'react';
import api from '../api/notesApi';

type Note = {
  _id: string;
  title: string;
  content: string;
};

const NoteItem: React.FC<{ note: Note; onDelete: (id: string) => void; onUpdate: (updatedNote: Note) => void }> = ({ note, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleDelete = async () => {
    try {
      await api.delete(`/${note._id}`);
      onDelete(note._id);
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await api.put(`/${note._id}`, { title, content });
      onUpdate(res.data);
      setEditing(false);
    } catch (err) {
      console.error('Error updating note:', err);
    }
  };

  return (
    <div className="bg-gray-100 rounded p-3 shadow">
      {editing ? (
        <>
          <input
            className="border p-1 w-full mb-1"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="border p-1 w-full mb-1"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="text-green-600 mr-2 hover:underline"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{note.title}</h2>
          <p>{note.content}</p>
          <button
            onClick={() => setEditing(true)}
            className="text-blue-500 mr-2 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default NoteItem;

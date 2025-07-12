import React, { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import api from '../api/notesApi';

type Note = {
  _id: string;
  title: string;
  content: string;
};

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const res = await api.get('/');
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = (id: string) => {
    setNotes(notes.filter(note => note._id !== id));
  };

  const handleUpdate = (updatedNote: Note) => {
    setNotes(notes.map(note => (note._id === updatedNote._id ? updatedNote : note)));
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {notes.map(note => (
        <NoteItem
          key={note._id}
          note={note}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default NoteList;

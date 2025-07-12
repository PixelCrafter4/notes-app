import React from 'react';
import NoteList from './components/NoteList';
import NewNoteForm from './components/NewNoteForm';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Notes App</h1>
      <NewNoteForm />
      <NoteList />
    </div>
  );
};

export default App;

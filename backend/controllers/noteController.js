const Note = require('../models/noteModel');

// @desc    Get all notes
// @route   GET /api/notes

const getNotes = async (req, res) =>{
    try{
        const notes = await Note.find();
        res.json(notes);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

// @desc    Create a new note
// @route   POST /api/notes

const createNote = async(req,res) => {
    const {title, content} = req.body;
    try{
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch(error){
        res.status(400).json({message: error.message});
    }
};

// @desc    Delete a note
// @route   DELETE /api/notes/:id
const deleteNote = async(req,res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message: "Note not found"});

         await Note.deleteOne({ _id: req.params.id });
        res.json({message: "Note deleted"});
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

// @desc Update a note
// @route PUT /api/notes/:id
const updateNote = async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }  // return the updated note
        );
        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {getNotes, createNote, deleteNote, updateNote};
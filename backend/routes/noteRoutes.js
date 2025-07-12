const express = require('express');
const router = express.Router();
const { getNotes, createNote, deleteNote, updateNote } = require('../controllers/noteController');


router.get('/', getNotes);        // GET /api/notes
router.post('/', createNote);     // POST /api/notes
router.delete('/:id', deleteNote); // DELETE /api/notes/:id
router.put('/:id', updateNote);

module.exports = router;
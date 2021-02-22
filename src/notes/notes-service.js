const NotesService = {
  getAllNotes(knex){
    return knex
      .select('*')
      .from('notes')
  },
  getById(knex, id) {
    return knex 
      .from('notes')
      .select('*')
      .where('id', id)
      .first()
  },
  deleteNote(knex, id) {
    return knex
      .from('notes')
      .where({ id })
      .delete()
  },
  insertNote(knex, newNote) {
    return knex
      .insert(newNote)
      .into('notes')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
}

module.exports = NotesService
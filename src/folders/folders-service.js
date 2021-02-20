const FoldersService = {
  getAllFolders(knex){
    return knex
      .select('*')
      .from('folders')
  },
  getById(knex, id) {
    return knex 
      .from('folders')
      .select('*')
      .where('id', id)
      .first()
  },
  deleteFolder(knex, id) {
    return knex
      .from('folders')
      .where({ id })
      .delete()
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
}

module.exports = FoldersService
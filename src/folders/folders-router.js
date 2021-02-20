const path = require('path')
const express = require('express')
const xss = require('xss')
const logger = require('../logger')
const FoldersService = require('./folders-service')

const articlesRouter = express.Router()
const jsonParser = express.json()

const serializeFolder = folder => ({
  id: folder.id,
  name: folder.name,
  modified: folder.modified
})

foldersRouter
  .route('/')
  .get((res, res, next) => {
    const knexInstance = req.app.get('db')
    FoldersService.getAllFolders(knexInstance)
      .then(folders => {
        res.json(folders.map(serializeFolder))
      })
      .catch(next)
  })


module.exports = articlesRouter
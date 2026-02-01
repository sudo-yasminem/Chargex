/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

const TestDbConnexion = () => import('./test_db_connexion.js')

Route.get('/testdb', [TestDbConnexion, 'index'])

Route.get('/testdb2', async () => {
  const result = await db.rawQuery('SELECT id, nom FROM maquettes')
  return result[0]
})

Route.get('/', async () => {
  return { message: 'Connexion Adonis OK' }
})

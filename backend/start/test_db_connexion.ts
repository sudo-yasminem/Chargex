/* eslint-disable prettier/prettier */
import db from "@adonisjs/lucid/services/db"

export default class TestDbConnexion {
  async index() {
    return await db.rawQuery('SELECT DATABASE() as db')
  }
}

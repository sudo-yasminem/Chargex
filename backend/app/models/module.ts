
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Module extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'heures_cm' })
  declare heuresCm: number

  @column({ columnName: 'heures_td' })
  declare heuresTd: number

  @column({ columnName: 'heures_tp' })
  declare heuresTp: number

  @column({ columnName: 'maquette_id' })
  declare maquetteId: number

  @column({ columnName: 'matiere_id' })
  declare matiereId: number
}

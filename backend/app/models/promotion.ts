
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Promotion extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column()
  declare annee: string

  @column({ columnName: 'nb_etudiants' })
  declare nbEtudiants: number

  @column({ columnName: 'nb_grp_td' })
  declare nbGrpTd: number

  @column({ columnName: 'nb_grp_cm' })
  declare nbGrpCm: number

  @column({ columnName: 'nb_grp_tp' })
  declare nbGrpTp: number

  @column({ columnName: 'resp_annee' })
  declare respAnnee: string
}

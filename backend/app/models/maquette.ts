/* eslint-disable prettier/prettier */
import { BaseModel, column, belongsTo, hasMany } from "@adonisjs/lucid/orm"
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Promotion from './promotion.js'
import Module from './module.js'

export default class Maquette extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nom: string

  @column({columnName: 'nb_modules'})
  declare nbModules: number

  @belongsTo(() => Promotion)
  declare promotion: BelongsTo<typeof Promotion>

  @hasMany(() => Module)
  declare modules: HasMany<typeof Module>

}
